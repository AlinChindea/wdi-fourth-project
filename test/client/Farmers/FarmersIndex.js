/* global describe it beforeEach before after afterEach */  //global vars from Mocha and Chai - if linter comes across any of these errors, don't render the errors

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Promise from 'bluebird';
import Axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

import FarmersIndex from '../../../src/components/farmers/FarmersIndex';

const farmerData = [{
  id: 1,
  name: 'Farmer Joe',
  image: 'joe.jpg',
  story: 'Farm story',
  looking: '20',
  offer: 'weekend retreat'
}, {
  id: 2,
  name: 'Farmer Mary',
  image: 'mary.jpg',
  story: 'Farm story',
  looking: '15',
  offer: 'weekend retreat'
}];

describe('FarmersIndex tests', () => {
  let wrapper = null;
  let promise = null;

  before(done => {
    promise = Promise.resolve({ data: farmerData });
    sinon.stub(Axios, 'get').returns(promise);
    done();
  });

  after(done => {
    Axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter>
        <FarmersIndex />
      </MemoryRouter>
    );

    done();
  });

  it('should display farmer info', done => {
    promise.then(() => {
      wrapper.update();

      expect(wrapper.find('div.col-md-4').length).to.equal(2);
      done();
    });
  });

  it('should display links to show pages', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.col-md-4').length).to.equal(2);
      expect(wrapper.find({ href: '/farmers/1' }).length).to.equal(1);
      expect(wrapper.find({ href: '/farmers/2' }).length).to.equal(1);
      done();
    });
  });
  it('should display the search filter and bar and farmers nearby button when logged in', done => {
    window.localStorage.setItem('token', 'FAKETOKEN');
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('.btn-primary').length).to.equal(1);
      window.localStorage.removeItem('token');
      done();
    });
  });

  it('should not display the search filter and bar and farmers nearby button logged in', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('.main-button').length).to.equal(0);
      done();
    });
  });
});
