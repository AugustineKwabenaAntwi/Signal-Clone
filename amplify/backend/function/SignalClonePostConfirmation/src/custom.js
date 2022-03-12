/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require("aws-sdk")
const ddb = new aws.DynamoDB();
  // event event.request.userAttributes.{sub,email}
  // insert code to be executed by your lambda trigger  
  const tableName = process.env.USERTABLE;
  exports.handler = async (event) => {
  
    if(!event?.request?.userAttributes?.sub){
      console.log('no sub')
      return;
    }
  
    const now = new Date();
    const timestamp = now.getTime();
  
    const userItem = {
      _typename:{S:"User"},
      _lastChangedAt:{N:timestamp.toString()},
      _version:{N:"1"},
      createdAt:{S:now.toISOString()},
      updatedAt:{S:now.toISOString()},
      id:{S:event.request.userAttributes.sub},
      name:{S:event.request.userAttributes.email}
    }
  
    const params={
      Item:userItem,
      TableName: tableName
    };
    
    // save a new user
    try{ 
      await ddb.putItem(params).promise();
      console.log("success")
    } catch(e){
      console.log(e)
    }
  };
