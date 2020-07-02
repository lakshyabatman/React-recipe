const { default: APIService } = require("../+store/side-effects");

describe('>>> API SERVICE', () => {
  let apiService;
  beforeAll(() => {
    apiService = new APIService()
  })
  it('should send request to API' , () => {
    apiService.fetchDishes("test")
    .then((resp) => {
      expect(resp.status).toEqual(200)
    })
    .catch(err =>console.log(err))
  })
})
