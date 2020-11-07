import AWS from 'aws-sdk';
const sns = new AWS.SNS({ apiVersion: '2010-03-31', region: 'eu-west-1' });

export default async function (message: string) {
  const params = {
    TopicArn: 'arn:aws:sns:eu-west-1:522682236448:tavistock',
    Message: message,
    MessageAttributes: {
      'AWS.SNS.SMS.SenderID': {
        DataType: 'String',
        StringValue: 'Tavistock'   
      },
    }
  };

  try {
    await sns.publish(params).promise();
  } catch (e) {
    console.log(e.message);
  }
}


