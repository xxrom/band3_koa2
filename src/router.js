import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const router = new Router();

// curl -H "Content-Type: application/json" -X POST --data '{"value": "30"}' http://localhost:3334
router.post('/', bodyParser(), async (ctx) => {
    console.log('asdfl alskdfj laskjdf test');

    console.log('request', ctx.request.body);

    const data = { allGood: true };
    ctx.status = 200;
    ctx.body = JSON.stringify({ data });
});

export default router;