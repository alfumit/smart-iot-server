import template from '../public/index12.html';

exports.get = async function(ctx, next) {
    ctx.body = template;
};
