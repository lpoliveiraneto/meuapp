import React from 'react';
import ReactDOM from 'react-dom';
import DadosPessoais from '../../components/FormularioCadastro/DadosPessoais';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, render } from 'enzyme';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< DadosPessoais/>, div);
  });
