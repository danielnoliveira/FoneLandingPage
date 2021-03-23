import { render, screen } from '@testing-library/react';
import App from './../App';

test('renders app div', () => {
  render(<App />);
  const container = screen.getByTestId("app");
  expect(container).toBeInTheDocument();
});

describe('renders header',() => {

  beforeEach(()=>{
    render(<App />);
  });
  test('renders header container',()=>{
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  test('renders logo',()=>{
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
  test('renders navbar',()=>{
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });
  test('renders menu',()=>{
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });
});

describe('renders navbar',()=>{
  beforeEach(()=>{
    render(<App />);
  });
  test('render items',()=>{
    const items = screen.getAllByTestId("nav-item");
    expect(items.length).toBe(4);
    items.forEach(item=>{
      expect(item).toBeInTheDocument();
    });
  });
});
describe('renders menu',()=>{
  beforeEach(()=>{
    render(<App />);
  });

  test('renders menu icon search',()=>{
    const icon = screen.getByTestId("menu-search");
    expect(icon).toBeInTheDocument();
  });
  test('renders menu icon shopping cart',()=>{
    const icon = screen.getByTestId("menu-shoppingcart");
    expect(icon).toBeInTheDocument();
  });
  test('renders menu icon bars',()=>{
    const icon = screen.getByTestId("menu-bars");
    expect(icon).toBeInTheDocument();
  });
});

describe('renders main',()=>{
  beforeEach(()=>{
    render(<App />);
  });
  test('renders main div',()=>{
    const main = screen.getByTestId("main");
    expect(main).toBeInTheDocument();
  });
  test('renders index items',()=>{
    const main = screen.getByTestId("index_items");
    expect(main).toBeInTheDocument();
  });
});