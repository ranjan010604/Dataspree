// Create animated neural network
function createNeuralNetwork() {
    const container = document.getElementById('neuralNetwork');
    if (!container) return;
    
    const nodes = [];
    const connections = [];
    
    // Create nodes
    for (let i = 0; i < 20; i++) {
        const node = document.createElement('div');
        node.className = 'node';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        node.style.left = `${x}%`;
        node.style.top = `${y}%`;
        node.style.opacity = 0.6 + Math.random() * 0.4;
        
        nodes.push({ element: node, x, y });
        container.appendChild(node);
    }
    
    // Create connections
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (Math.random() > 0.7) {
                const startNode = nodes[i];
                const endNode = nodes[j];
                
                const dx = endNode.x - startNode.x;
                const dy = endNode.y - startNode.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 40) {
                    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                    
                    const connection = document.createElement('div');
                    connection.className = 'connection';
                    connection.style.width = `${distance}%`;
                    connection.style.left = `${startNode.x}%`;
                    connection.style.top = `${startNode.y}%`;
                    connection.style.transform = `rotate(${angle}deg)`;
                    connection.style.height = '1px';
                    connection.style.opacity = 0.1 + Math.random() * 0.2;
                    
                    connections.push(connection);
                    container.appendChild(connection);
                }
            }
        }
    }
    
    // Animate nodes
    nodes.forEach(node => {
        let xDirection = Math.random() > 0.5 ? 1 : -1;
        let yDirection = Math.random() > 0.5 ? 1 : -1;
        let speed = 0.02 + Math.random() * 0.03;
        
        function animate() {
            let x = parseFloat(node.element.style.left);
            let y = parseFloat(node.element.style.top);
            
            if (x > 95 || x < 5) xDirection *= -1;
            if (y > 95 || y < 5) yDirection *= -1;
            
            x += xDirection * speed;
            y += yDirection * speed;
            
            node.element.style.left = `${x}%`;
            node.element.style.top = `${y}%`;
            
            node.x = x;
            node.y = y;
            
            requestAnimationFrame(animate);
        }
        
        animate();
    });
}

// Initialize neural network animation
document.addEventListener('DOMContentLoaded', createNeuralNetwork);