import ArchiveTable from '../components/ArchiveTable';

export default {
  title: 'Archive Table',
  component: ArchiveTable,
};

const Template = args => <ArchiveTable {...args} />;

export const Default = Template.bind({});
Default.args = { lable: 'Arhcived' };
