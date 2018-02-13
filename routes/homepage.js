
exports.get = async function(ctx, next) {
    ctx.body = `
    <!doctype html>
    <html>
        <head>
            <title>Smart Homer</title>
    
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <h1>Socket IO chat</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <form id="registration" action="">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">User name:</span>
                                </div>
                                <input id="userName" type="text" class="form-control" name="userName" placeholder="Please, enter your name" />
                                <button class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <form id="message" action="">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Test value" />
                                <button clas="btn btn-secondary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div id="notification" class="alert alert-info" style="display: none"></div>
                    </div>
                </div>
                <h3>Chat messages:</h3>
                <small id="typing" class="text-muted"></small>
                <ul id="messages"></ul>
            </div>
        <script src="/socket.io/socket.io.js"></script>
        <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script>
            const socket = io();
            let user = $('#userName').val(),
                queueManager = [];
    
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
            $('#message input').on('keypress', () => {
                socket.emit('user typing', {user: user});
            });
    
            $('#registration').submit((e) => {
                e.preventDefault();
                user = $('#userName').val();
                console.log(user);
                socket.emit('new user', user);
                return false;
            });
    
            socket.on('chat message', (msg) => {
                $('#messages').prepend($('<li>').text(msg.user +': '+msg.message));
            });
    
            socket.on('connected', (msg) => {
              $('#notification').slideDown();
                $('#notification').text("New user connected");
                setTimeout(()=>{
                  $('#notification').slideUp();
                    $('#notification').text("");
                }, 2000)
            });
            socket.on('user disconnected', (msg) => {
              $('#notification').slideDown();
              $('#notification').text("User got disconnected");
                setTimeout(()=>{
                  $('#notification').slideUp();
                  $('#notification').text("");
                }, 2000)
            });
            socket.on('user registered', (msg) => {
              $('#notification').slideDown();
                $('#notification').text('User '+ msg + ' registered');
              setTimeout(()=>{
                $('#notification').slideUp();
                $('#notification').text("");
              }, 2000)
            });
            socket.on('user typing notification', (msg) => {
              queueManager.forEach((item)=>{
                clearTimeout(item);
                });
              $('#typing').slideDown();
              $('#typing').text('Following users are typing'+ msg.join(','));
              let to = setTimeout(()=>{
                $('#typing').slideUp();
                $('#typing').text("");
              }, 5000);
              queueManager.push(to);
            });
        </script>
        </body>
    </html>
    `;
};
