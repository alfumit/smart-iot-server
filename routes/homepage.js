
exports.get = async function(ctx, next) {


    ctx.body = `
        <html>
            <head>
                <title>Smart Homer</title>
            </head>
            <body>
                <h1>Test page</h1>
                <p>УУУ</p>
                <form action="">
                	<input type="text" placeholder="Test value" />
                	<button>Send</button>
				</form>
				<ul id="messages">
					<li>First li</li>
				</ul>
                <script src="/socket.io/socket.io.js"></script>
                <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
                <script>
                    const socket = io();
                    socket.on('message', () => {
                    	console.log('yaya');
                    })
                    $('form').submit(function() {
                            socket.emit('chat message', $('input').val());
      						$('input').val('');
      						return false;
                    })
                    socket.on('chat message', (msg) => {
                    	    socket.on('chat message', function(msg){
      						$('#messages').append($('<li>').text(msg));
    });
                    })
                </script>
            </body>
        </html>
        `;
};
