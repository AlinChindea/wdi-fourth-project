/* global describe it */

import React from 'react';
import {expect} from 'chai'; //the syntax I need
import {shallow} from 'enzyme'; //testing env for a functional component

import FarmersForm from '../../../src/components/farmers/FarmersForm';

describe('FarmersForm tests', () => {
  it('should render 9 input fields', done => {
    const props = {
      farmer: {
        name: '',
        image: '',
        address: '',
        location: {
          lat: '',
          lng: ''
        },
        story: '',
        target: '',
        offer: {
          produce: false,
          weekendStay: false,
          farmExperience: false
        },
        email: '',
        number: '',
        farmerTrue: true
      },
      errors: {}
    };

    const wrapper = shallow(<FarmersForm {...props} />);

    expect(wrapper.find('input').length).to.equal(9);
    // expect(wrapper.find('select').length).to.equal(1);

    done();
  });

  it('should populate the form with prop values', done => {
    const props = {
      farmer: {
        name: 'name',
        image: 'image',
        address: 'address',
        story: 'story',
        target: 'target',
        offer: {
          produce: 'produce',
          weekendStay: 'weekendStay',
          farmExperience: 'farmExperience'
        },
        email: 'email',
        number: 'number'
      },
      errors: {}
    };

    const wrapper = shallow(<FarmersForm {...props} />);

    expect(wrapper.find({value: 'name'}).length).to.equal(1);
    expect(wrapper.find({value: 'address'}).length).to.equal(1);
    expect(wrapper.find({value: 'story'}).length).to.equal(1);
    expect(wrapper.find({value: 'target'}).length).to.equal(1);
    expect(wrapper.find({value: 'email'}).length).to.equal(1);
    expect(wrapper.find({value: 'number'}).length).to.equal(1);
    expect(wrapper.find({value: 'produce'}).length).to.equal(1);
    expect(wrapper.find({value: 'weekendStay'}).length).to.equal(1);
    expect(wrapper.find({value: 'farmExperience'}).length).to.equal(1);

    done();
  });

  it('should correctly display errors', done => {
    const props = {
      farmer: {
        name: '',
        image: '',
        address: '',
        location: {
          lat: '',
          lng: ''
        },
        story: '',
        target: '',
        offer: {
          produce: false,
          weekendStay: false,
          farmExperience: false
        },
        email: '',
        number: '',
        farmerTrue: true
      },
      errors: {
        name: 'Name is required',
        image: 'Image is required',
        address: 'Address required',
        story: 'Story is required',
        looking: 'A number is required',
        offer: 'An offer is required',
        email: 'An email is required',
        number: 'A telephone number is requried'
      }
    };

    const wrapper = shallow(<FarmersForm {...props} />);
    expect(wrapper.find('.alert').length).to.equal(8);
    // expect(wrapper.find('.error:first-child.val("Title is required")').length).to.equal(1);

    done();
  });

});
