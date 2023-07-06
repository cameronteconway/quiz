import Geography from '../../src/pages/Geography.tsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import geographyQuestionsReducer from '../../src/reducers/geographyQuestionsReducer.ts';
import worldCapitalQuestionsReducer from '../../src/reducers/worldCapitalQuestionsReducer.ts';

describe('<Geography />', () => {
    beforeEach('Load store', function () {
        this.store = configureStore({
            reducer: {
                geographyQuestionsData: geographyQuestionsReducer,
                worldCapitalQuestionsData: worldCapitalQuestionsReducer,
            },
        });
    });

    it('render', function () {
        cy.mount(
            <Provider store={this.store}>
                <Geography />
            </Provider>
        );
    });

    // Test setup
    it('Quiz Setup: 20 Questions and Difficulty Hard', function () {
        cy.mount(
            <Provider store={this.store}>
                <Geography />
            </Provider>
        );
        cy.get('#questionsAmountGeography')
            .select('20')
            .should('have.value', '20');
        cy.get('#difficulty').select('Hard').should('have.value', 'hard');

        cy.get('#questionsAmountGeography').then((elem) => {
            this.questionAmountValue = Cypress.$(elem).val();
        });
        cy.get('#difficulty').then((elem) => {
            this.difficultyValue = Cypress.$(elem).val();
        });
        cy.get('button').click({ force: true });
        cy.get('div.quiz-container span').should('have.text', 'Score: 0/20');

        // cy.get('#questionsAmountGeography').then((elem) => {
        //     this.questionAmountValue = Cypress.$(elem).val();
        // });
        // cy.get('#difficulty').then((elem) => {
        //     this.difficultyValue = Cypress.$(elem).val();
        // });
        // cy.intercept({
        //     method: 'GET',
        //     url: `https://opentdb.com/api.php?amount=${this.questionAmountValue}&category=22&difficulty=${this.difficultyValue}`,
        // }).as('apiRequest');
        // cy.wait('@apiRequest').then((intercept) => {
        //     console.log(intercept);
        //     // expect(intercept.response.body)
        // });
    });

    // it('Questions: Go through 10 question', function () {
    //     cy.mount(
    //         <Provider store={this.store}>
    //             <Geography />
    //         </Provider>
    //     );
    //     cy.get('button').click({ force: true });

    //     for (let i = 0; i < 10; i++) {
    //         cy.get('.quiz-container button:nth-child(1)').click({
    //             force: true,
    //         });
    //         cy.wait(1500);
    //     }
    // });

    it('Final Score, Replay provides same question: ', function () {
        cy.mount(
            <Provider store={this.store}>
                <Geography />
            </Provider>
        );
        cy.get('button').click({ force: true });

        // cy.get('.quiz-container h2').then((text) => {
        //     const textValue = text.text();
        //     console.log(textValue);
        //     // cy.wrap(textValue).as('wrapValue');
        // });

        for (let i = 0; i < 10; i++) {
            cy.get('.quiz-container button:nth-child(1)').click({
                force: true,
            });
            cy.wait(1500);
        }

        cy.get('.quiz-container button:nth-child(1)').click({ force: true });
        cy.get('.quiz-container h2').should(
            'have.text',
            this.firstQuestionTitle
        );
    });
});
