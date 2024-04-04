
import { Layout, Flex, Button } from 'antd';
import Project from '../components/Project';
const { Header, Footer, Sider, Content } = Layout;

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 0,
  overflow: 'hidden',
  height: 1000,
};

const sliderStyle = {
  lineHeight: '200%',
  color: '#fff',
  backgroundColor: '#264653',
};

const headerStyle = {
  backgroundColor: '#BD4089',
  textAlign: 'center',
  align: 'center',
  height: '10%',
};

const flexStyle = {
  textAlign: 'center',
  align: 'center',
  height: '100%',
};

const contentStyle = {
  backgroundColor: '#CFD2B2',
};

function Home() {
  return (
    <div>
      <Layout>
        <Sider style={sliderStyle}>Sider</Sider>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <Flex style={flexStyle} align="center" justify="space-around">
              <Button type="default">About me</Button>
              <Button type="default">Projects</Button>
              <Button type="default">Experience</Button>
              <Button type="default">Contact</Button>
              <Button type="primary">Resume</Button>
            </Flex>
          </Header>

          <Content style={contentStyle}>
            <Project
              name="42sh"
              image="../42SH.png"
            >
              Shell command interpreter and executor based on POSIX standard in C
            </Project>
            <Project name="Tiger" image='../TIGER.webp'>
            Compiler for the Tiger language in C++
            </Project>
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
