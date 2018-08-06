const utils = require('./utils');
const expect = require('expect');

describe('Util tests', () => {

      describe('Async tests', () => {

          it('should async add two numbers', (done) => {
            utils.asyncAdd(2, 4, (res) => {
              expect(res).toBe(6).toBeA('number');
              done();
            });
          });

          it('should async square two numbers', (done) => {
            utils.asyncSquare(2, (res) => {
              expect(res).toBe(4).toBeA('number');
              done();
            });
          });
        })

        describe('Sync tests', () => {

          it('should add two numbers', () => {
            let res = utils.add(2, 3);
            expect(res).toBe(5).toBeA('number');
          });

          it('should include first and last name', () => {
            let user = {
              location: "pune",
              age: "25"
            }
            let res = utils.userData(user, "tanuj bohra")
            expect(res).toEqual(user)
            expect(res).toInclude({
              firstname: 'tanuj'
            });
          });
        })
      })
