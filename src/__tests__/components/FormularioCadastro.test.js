import React from 'react';
import ReactDOM from 'react-dom';
import FormularioCadastro from '../../components/FormularioCadastro/FormularioCadastro';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, render } from 'enzyme';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< FormularioCadastro/>, div);
  });

/*it('Should display formularioCadastro', () => {
    const wrapper = shallow(<FormularioCadastro />);
    expect(wrapper.find('input').length).toBe('1');
});*/