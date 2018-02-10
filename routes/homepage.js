
exports.get = async function(ctx, next) {


    ctx.body = `
        <html>
            <head>
                <title>Smart Homer</title>
            </head>
            <body>
                <h1>Test page</h1>
                <p>УУУ</p>
                <form id="registration" action="">
                	<label for="#userName"></label>
                	<input id="userName" type="text" name="userName" placeholder="Please, enter your name" />
                	<button>Register</button>
				</form>
                <form id="message" action="">
                	<input type="text" placeholder="Test value" />
                	<button>Send</button>
				</form>
				<span id="notification" style="color: red"></span>	
				<ul id="messages">
					<li>First li</li>
				</ul>
                <script src="/socket.io/socket.io.js"></script>
                <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
                <script>
                    const socket = io();
                    let user = $('#userName').val();
                    socket.on('message', () => {
                    	console.log('yaya');
                    });
                    $('#message').submit(function() {
                    		let msgObj = {
                            	user: user,
                            	message: $('#message input').val()
                            };
                    		console.log(msgObj);
                            socket.emit('chat message', msgObj);
      						$('#message input').val('');
      						return false;
                    });
                    
                    $('#registration').submit((e) => {
                    	e.preventDefault();
                    	user = $('#userName').val();
                    	console.log(user);
                    	socket.emit('new user', user);
                    	return false;
                    });
                    
                    socket.on('chat message', (msg) => {
      						$('#messages').append($('<li>').text(msg.user +': '+msg.message));
                    });
                    
                    socket.on('connected', (msg) => {
                    	$('#notification').text("New user connected")
                    	setTimeout(()=>{
                    		$('#notification').text("");
                    	}, 2000)
                    });
                    socket.on('user disconnected', (msg) => {
                    	$('#notification').text("User got disconnected");
                    	setTimeout(()=>{
                    		$('#notification').text("");
                    	}, 2000)
                    });
                    
                    socket.on('user registered', (msg) => {
                    	$('#notification').text('User '+ msg.user + ' registered');
                    })
                </script>
            </body>
        </html>
        `;
};
