import { mountComponent, rendererComponent } from '../utils/test-utils';
import Counter from '../../src/components/Counter/Counter';

describe('<Counter />', () => {
  let wrapper: any;

  const props: any = {};

  it('defines the component Counter', () => {
    wrapper = mountComponent(Counter, props);
    expect(wrapper).toBeDefined();
  });

  it('defines the snapshoot component Counter', () => {
    const tree = rendererComponent(Counter, props).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
