import cors from 'cors';

export const config = {
    env: process.env.ENV || 'dev',
    port: process.env.PORT || 3003
}