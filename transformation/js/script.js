const quotes = [ "Not all those who wander are lost. - J.R.R. Tolkien",
    "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. - Jane Austen",
    "Whatever our souls are made of, his and mine are the same. - Emily Brontë",
    "Beware; for I am fearless, and therefore powerful. - Mary Shelley",
    "The only way to get rid of a temptation is to yield to it. - Oscar Wilde",
    "It was a bright cold day in April, and the clocks were striking thirteen. - George Orwell",
    "Time, which sees all things, has found you out. - Sophocles",
    "All we have to decide is what to do with the time that is given us. - J.R.R. Tolkien",
    "I am no bird; and no net ensnares me: I am a free human being with an independent will. - Charlotte Brontë",
    "So it goes. - Kurt Vonnegut",
    "There is no greater agony than bearing an untold story inside you. - Maya Angelou",
    "It matters not what someone is born, but what they grow to be. - J.K. Rowling",
    "Until I feared I would lose it, I never loved to read. One does not love breathing. - Harper Lee",
    "The world breaks everyone, and afterward, many are strong at the broken places. - Ernest Hemingway",
    "That which yields is not always weak. - Jacqueline Carey" ];
    
    $(document).ready(function () {
    // Picks a quote randomly from the list (could get repeats)
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    $('#quote-container').text(quote);
  
    const canvas = document.getElementById('magic-layer');
    const ctx = canvas.getContext('2d');
    resizeCanvas();
  
    // Cover the top  layer with the color black
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Erasing with the cursor
    $(canvas).on('mousemove', function(e) {
        const x = e.pageX;
        const y = e.pageY;
      
        //ctx.globalCompositeOperation = 'source-over';

        ctx.globalCompositeOperation = 'destination-out';
        
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, 2 * Math.PI);
        //ctx.fillStyle = 'black';

        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';

        spawnSparkle(x, y);
    });
  
    $(window).on('resize', resizeCanvas);
  
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
        //ctx.fillStyle = 'rgba(0, 0, 0, 5.0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  
    function spawnSparkle(x, y) {
        const sparkle = $('<div class="sparkle"></div>');
        sparkle.css({ top: y + 'px', left: x + 'px' });
        $('body').append(sparkle);
        sparkle.animate({
            opacity: 0,
            top: y - 20 + 'px'
        }, 500, function () {
            $(this).remove();
        });
    }
  });