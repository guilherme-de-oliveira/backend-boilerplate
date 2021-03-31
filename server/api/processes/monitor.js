const asyncHandler = require('express-async-handler');

module.exports = (Router, config) => {
    const router = Router();
    
    router.get('/test', asyncHandler(async (request, response) => {
            
        }
    ));
    
    
    return router;
}
