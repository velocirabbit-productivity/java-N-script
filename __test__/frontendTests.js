import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import App from '../client/App';
import SignIn from '../client/components/SignIn';
import Signup from '../client/components/SignUp';

describe('Java-N-script testing React components', () => {

    describe('SignIn and SignUp', () => {
      let signin, signup;

      beforeEach(() => {
        signin = render(<SignIn />);
        signup = render(<SignUp />);
      });
  
      test('Signin', () => {
        expect(text.getByText("Mega:").nextSibling).toHaveTextContent('Markets');
        expect(text.getByText('Mega:')).toHaveStyle('font-weight: bold')
      });
    });
  
    describe('Market', () => {
      let market;
      const props = {
        index: 253,
        location: 'Belarus',
        cards: 37,
        percentage: '80.00',
        addCard: jest.fn(),
        deleteCard: jest.fn()
      }
      
      beforeEach(() => {
        market = render(<Market {...props} />)
      });


      // TODO: Test the following:
      // 1. A Market should display an ID, location, number of cards, percent of total
      test('Displays the passed-in ID, location, number of cards, percent of total', () => {
        expect(market.getByText('Market ID:').nextSibling).toHaveTextContent(
          '253'
        );
        /*expect(text.getByText('Market ID:')).toHaveStyle('font-weight: bold');
        expect(market.getByText('Location:').nextSibling).toHaveTextContent(
          'Belarus'
        );
        expect(text.getByText('Location')).toHaveStyle('font-weight: bold');
        expect(market.getByText('Cards:').nextSibling).toHaveTextContent('37');
        expect(text.getByText('Cards')).toHaveStyle('font-weight: bold');
        expect(market.getByText('% of total:').nextSibling).toHaveTextContent(
          '80.00'
        );
        expect(text.getByText('% of total')).toHaveStyle('font-weight: bold');*/
      });
      // 2. It should also contain two buttons for adding and removing markets
      test('Should contain two buttons for adding and removing markets', () => {
        const [ addButton, deleteButton ] = market.getAllByRole('button');
        expect(addButton.textContent).toEqual('+');
        expect(deleteButton.textContent).toEqual('-');
        
      });
      // 3. The functions passed down should be invoked on click
      test('Functions passed down should be invoked on click', () => {
        const { addCard, deleteCard } = props;
        const [ addButton, deleteButton ] = market.getAllByRole('button');

        fireEvent.click(addButton);
        fireEvent.click(deleteButton);
        expect(addCard).toHaveBeenCalledTimes(1);
        expect(deleteCard).toHaveBeenCalledTimes(1);
      });
      // 4. The percentage should be a string calculated to two decimals.
        // Test for zero, a whole number, and a fractional value. (Right now this
        // is implemented incorrectly, so follow TDD here)
      test('Percentage should be a string with two decimals', () => {
        const { percentage } = props;
        const regex = /\.[0-9]{2}$/g;
        expect(percentage).toMatch(regex);
        /*const dec = percentage.slice(percentage.length - 2);
        expect(dec).toHaveLength(2);
        expect(dec[0]).not.toEqual('.');
        expect(dec[1]).not.toEqual('.');*/
      });
      
    });
});