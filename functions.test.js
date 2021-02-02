const { default: axios } = require('axios');
const functions = require('./functions');
jest.mock('axios');


describe('sum function tests', () => {

  test('3 + 7 should be 10', () => {
    expect(functions.sum(3, 7)).toBe(10)
  })

  test('3 + 7 shouldnt be 11', () => {
    expect(functions.sum(3, 7)).not.toBe(11)
  })

  test('5 + 6 should be greater than 10',() => {
    expect(functions.sum(5, 6)).toBeGreaterThan(10)
  })

  test('5 + 5 should be less than or equal to 10', () => {
    expect(functions.sum(5, 5)).toBeLessThanOrEqual(10)
  })

  test('result should not be nan', () => {
    expect(functions.sum(1, 2)).not.toBeNaN()
  })

  test('should be null when call with any negative parameter', () => {
    expect(functions.sum(-7, 3)).toBeNull()
  })

 })


 describe('splitArray function test', () => {

  test('should do split a string into a list', () => {
    expect(functions.splitArray('Example sentence for test')).toEqual(['Example', 'sentence', 'for', 'test'])
  })

  test('result should contain the words in the parameter', () => {
    expect(functions.splitArray('Example sentence for test')).toContain('test')
  })

  test('result length should equal to words count in the parameter', () => {
    expect(functions.splitArray('Example sentence for test')).toHaveLength('Example sentence for test'.split(" ").length)
  })

})


 describe('fetchDataFromAPI function tests', () => {
 
  const data = {
    "title": "The Basics - Networking",
    "description": "Your app fetched this from a remote endpoint!",
    "movies": [
      {
      "id": "1",
      "title": "Star Wars",
      "releaseYear": "1977"
      },
      {
      "id": "2",
      "title": "Back to the Future",
      "releaseYear": "1985"
      },
      {
      "id": "3",
      "title": "The Matrix",
      "releaseYear": "1999"
      },
      {
      "id": "4",
      "title": "Inception",
      "releaseYear": "2010"
      },
      {
      "id": "5",
      "title": "Interstellar",
      "releaseYear": "2014"
      }
    ]
  }
  
    axios.get.mockResolvedValue(data)

    test('response data check', async () => {
      const result = await functions.fetchDataFromAPI();
      expect(result).toEqual(data)
    })

    test('response description check', async () => {
      const result = await functions.fetchDataFromAPI();
      expect(result.description).toEqual(data.description)
    })

    test('response property check', async () => {
      const a = Object.keys(data)
      const result = await functions.fetchDataFromAPI();
      for (let index = 0; index < a.length; index++) {
        expect(result).toHaveProperty(a[index])
        
      }
    })
   
 })


 describe('promise function tests', () => {
   test('resolve state check', () => {
     expect(functions.promiseExamp()).resolves.toBe('done')
   })

   test('resolve state shouldnt return error', () => {
    expect(functions.promiseExamp()).resolves.not.toBe('error')
  })

   test('resolve state check', () => {
    try {
      functions.promiseExamp()
    } catch (error) {
      expect(functions.promiseExamp()).rejects.toThrow('error')
    }
  })
 })


 