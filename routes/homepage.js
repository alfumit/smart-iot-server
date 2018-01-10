
exports.get = async function(ctx, next) {


    ctx.body = `
        <html>
            <head>
                <title>Smart Homer</title>
            </head>
            <body>
                <h1>Test page</h1>
                <p>УУУ</p>
                <script src="/socket.io/socket.io.js"></script>
                <script>
                    const socket = io();
                    socket.on('message', () => {
                    	console.log('yaya');
                    })
                </script>
            </body>
        </html>
        `;
};
