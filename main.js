// This file is intentionally left blank.<script>
        // JavaScript for smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // JavaScript for chat bubble animation
        const chatBubble = document.querySelector('.chat-bubble');
        chatBubble.addEventListener('click', () => {
            chatBubble.classList.toggle('active');
            if (chatBubble.classList.contains('active')) {
                chatBubble.style.transform = 'translateY(-10px)';
            } else {
                chatBubble.style.transform = 'translateY(0)';
            }
        });