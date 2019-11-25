import { mountComponent, rendererComponent } from '../utils/test-utils';
import Common from '../../src/components/Common/Common';

describe('<Common />', () => {
  let wrapper: any;

  const props: any = {};

  it('defines the component', () => {
    wrapper = mountComponent(Common, props);
    expect(wrapper).toBeDefined();
  });

  it('defines the snapshoot component', () => {
    const tree = rendererComponent(Common, props).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
