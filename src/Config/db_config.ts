
import { config } from 'dotenv';
config();

let db_config : any = {}

if(process.env.NODE_ENV == 'local') {
      
      db_config = {
            PORT : process.env.SERVER_PORT_DEV,
            URI : 'mongodb://mongodb:27017/test_db'    
      }

} 
else if(process.env.NODE_ENV == 'server') {

      db_config = {
            PORT : process.env.SERVER_PORT_PROD,
            URI : 'mongodb://mongodb:27017/test_db'    
      }

}


export default db_config
