// require('node-fetch')
import { serverRequest } from '../src/client/js/makeServerReq'



describe("Testing POST request to the server", () => {
    test('Testing the meaningCloudRequest() function', () => {
        expect(serverRequest).toBeDefined()
    })
});
