const expect = require("expect");
const request = require("supertest");

const { app } = require("./../server");
const { ProjectItem } = require("./../models/project");

beforeEach((done) => {
   ProjectItem.remove({}).then(() => done());
});

const projectModelTest = new ProjectItem({
    projectName: "testy mctesterson",
    projectDescription: "test project",
    projectImage: "test.com/img",
    projectLink: "test.com/link"
})
// test
describe('Post /todos', () => {
    it('should create a new project', (done) => {
        
        request(app)
            .post('/projects')
            .send(projectModelTest)
            .expect((res) => {
                console.log(res.body);
                expect(res.body.projectName).toBe(projectModelTest.projectName);
            })
            .end((err, res) => {
                if (err) {
                  return done(err);
                } 
                
                ProjectItem.find().then((projects) => {
                    expect(projects.length).toBe(1);
                }).catch((e) => done(e));
            });
    });
});