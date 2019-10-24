import { mountComponent, rendererComponent } from '../utils/test-utils';
import Common from '../../src/components/Common';

describe('<Common />', () => {
  let wrapper: any;

  const props: any = {};

  it('defines the component', () => {
    wrapper = mountComponent(Common, props);
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });
});

describe('<Common />', () => {
  const props: any = {};

  it('defines the snapshoot component', () => {
    const tree = rendererComponent(Common, props).toJSON();
    // console.log('wrapper is', wrapper.debug());
    expect(tree).toMatchSnapshot();
  });
});
