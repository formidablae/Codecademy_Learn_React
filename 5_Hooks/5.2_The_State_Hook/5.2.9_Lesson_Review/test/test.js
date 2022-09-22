const shallow = require('enzyme/shallow');
const rewire = require('rewire');
const sinon = require('sinon');

describe('', function () {
    let appModule;
    try {
        appModule = rewire('../Container/AppFunction');
    } catch (e) {
        expect(
            true,
            'Try checking your code again. You likely have a syntax error.',
        ).to.equal(false);
    }
    const AppFunction = appModule.__get__('AppFunction');

    it('', function () {
        let wrapper;
        try {
            wrapper = shallow(<AppFunction />);
        } catch (e) {
            expect(
                false,
                "Check for errors in your `AppFunction` component, it isn't rendering",
            );
        }

        // render presentational components

        try {
            wrapper.find('NewTask').props();
            wrapper.find('TasksList').props();
        } catch (e) {
            expect(
                false,
                'Your `AppFunction()` should import and render `<NewTask />` and `<TasksList />`',
            ).to.be.true;
        }

        // render presentational components with their expected props

        expect(
            typeof wrapper.find('NewTask').prop('newTask'),
            'Your `AppFunction()` should render `<NewTask />`, passing an object as its `newTask` prop',
        ).to.equal('object');

        expect(
            typeof wrapper.find('NewTask').prop('handleChange'),
            'Your `AppFunction()` should render `<NewTask />`, passing a function as its `handleChange` prop',
        ).to.equal('function');

        expect(
            typeof wrapper.find('NewTask').prop('handleSubmit'),
            'Your `AppFunction()` should render `<NewTask />`, passing a function as its `handleSubmit` prop',
        ).to.equal('function');

        expect(
            Array.isArray(wrapper.find('TasksList').prop('allTasks')),
            'Your `AppFunction()` should render `<TasksList />`, passing an array as its `allTasks` prop',
        ).to.be.true;

        expect(
            typeof wrapper.find('TasksList').prop('handleDelete'),
            'Your `AppFunction()` should render `<TasksList />`, passing a function as its `handleDelete` prop',
        ).to.equal('function');

        // typing in string values for a new task to be added

        const message1 =
            'An event handler should update the state passed to the `NewTask` component when the user types in an input field';
        const USER_INPUT = {
            title: 'take out the trash',
            description: 'and the recycling',
        };
        let newTask;

        function typeInNewTodo() {
            try {
                const event1 = { target: { name: 'title', value: USER_INPUT.title } };
                wrapper.find('NewTask').prop('handleChange')(event1);
                wrapper.update();
                const event2 = {
                    target: { name: 'description', value: USER_INPUT.description },
                };
                wrapper.find('NewTask').prop('handleChange')(event2);
                wrapper.update();
                newTask = wrapper.find('NewTask').prop('newTask');
            } catch (e) {
                expect(false, message1).to.be.true;
            }
        }
        typeInNewTodo();

        expect(
            newTask.title === USER_INPUT.title &&
            newTask.description === USER_INPUT.description,
            'Manage the state of the title and description for a new task in your `AppFunction` component',
        ).to.be.true;

        expect(
            wrapper.find('TasksList').prop('allTasks').length,
            '`<TasksList />` should start as an empty list',
        ).to.equal(0);

        // Submitting a new todo should add it to our list
        const preventDefault = sinon.fake();
        const submitEvent = { preventDefault };

        function submitNewTodoForm() {
            try {
                wrapper.find('NewTask').prop('handleSubmit')(submitEvent);
                wrapper.update();
            } catch (e) {
                expect(false, 'Submitting the form should not throw an error').to.be
                    .true;
            }
        }

        submitNewTodoForm();

        expect(
            preventDefault.calledOnce,
            'Your event handler for submitting the new task, should call the `preventDefault()` method on the submit event',
        ).to.be.true;

        const allTasks = wrapper.find('TasksList').prop('allTasks');
        expect(
            Array.isArray(allTasks),
            'The `allTasks` prop passed to `<TasksList />` should be an array after adding a new event',
        ).to.be.true;

        expect(
            allTasks.length,
            'The `allTasks` prop passed to `<TasksList />` should be an array with a length of one entry after typing and submitting a new event',
        ).to.equal(1);

        expect(
            typeof allTasks[0],
            'The entries in the `allTasks` array that is passed to `<TasksList />` should be objects',
        ).to.equal('object');

        expect(
            allTasks[0].title,
            'The title property of the object added to the `allTasks` array should match the string that a user typed into the new task form',
        ).to.equal(USER_INPUT.title);

        expect(
            allTasks[0].description,
            'The description property of the object added to the `allTasks` array should match the string that a user typed into the new task form',
        ).to.equal(USER_INPUT.description);

        expect(
            allTasks[0].hasOwnProperty('id'),
            'Each object in the `allTasks` array should have a unique `id` property',
        ).to.be.true;

        newTask = wrapper.find('NewTask').prop('newTask');
        expect(
            (!newTask.title && !newTask.description) ||
            (newTask.title === '' && newTask.description === ''),
            'Clear the strings for title and description in the new task state when adding that task to the list',
        ).to.be.true;

        // short circuit submit handler when no value for the new todo's title

        submitNewTodoForm();

        expect(
            preventDefault.calledTwice,
            'Your event handler for submitting the new task, should always call the `preventDefault()` method of the submit event',
        ).to.be.true;

        expect(
            wrapper.find('TasksList').prop('allTasks').length,
            'When the new todo title field is empty, submitting the form should not add another object to our `allTasks` array',
        ).to.equal(1);

        // add a second todo
        typeInNewTodo();
        submitNewTodoForm();

        expect(
            preventDefault.calledThrice,
            'Your event handler for submitting the new task, should always call the `preventDefault()` method of the submit event',
        ).to.be.true;

        expect(
            wrapper.find('TasksList').prop('allTasks').length,
            'We should be able to add multiple todos to our `allTasks` array',
        ).to.equal(2);
    });
});
