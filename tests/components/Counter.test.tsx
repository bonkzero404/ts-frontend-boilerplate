import { mountComponent, rendererComponent } from '../utils/test-utils';
import Counter from '../../src/components/Counter';

describe('<Counter />', () => {
  let wrapper: any;

  const props: any = {};

  it('defines the component', () => {
    wrapper = mountComponent(Counter, props);
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });
});

describe('<Counter />', () => {
  let wrapper: any;

  const props: any = {};

  it('defines the snapshoot component', () => {
    const tree = rendererComponent(Counter, props).toJSON();
    // console.log('wrapper is', wrapper.debug());
    expect(tree).toMatchSnapshot();
  });
});
