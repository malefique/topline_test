const config = require('../config'),
      redis = require('async-redis').createClient(config.redis.server),
      crypto = require('crypto');

module.exports = {
    async get(source, params){

        let key = config.redis.prefix + source;

        if (params)
            key += crypto.createHash('md5').update(JSON.stringify(params)).digest("hex");

        let result = await redis.get(key);
        return result;
    },
    async set(source, params, value, ttl){

        let key = config.redis.prefix + source;

        if (params)
            key += crypto.createHash('md5').update(JSON.stringify(params)).digest("hex");

        let result = await redis.set(key, JSON.stringify(value));
        await redis.expire(key, ttl);

        return result;
    }
};