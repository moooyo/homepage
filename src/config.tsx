import { createFromIconfontCN } from '@ant-design/icons';
interface AppProps {
  IconType: string;
  AppName: string;
  InnerURL: string;
  URL: string;
}

const iconURL = '//at.alicdn.com/t/font.js';
const LineMaxAppSize = 5;
const AppInfo: AppProps[] = [
  {
    AppName: 'nas',
    IconType: 'icon-nas',
    InnerURL: '//10.0.0.0:5000/',
    URL: '//',
  },
  {
    AppName: 'wifi',
    IconType: 'icon-WIFI',
    InnerURL: '//10.0.0.1/',
    URL: '',
  },
  {
    AppName: 'clash',
    IconType: 'icon-weibiaoti-_huabanfuben-copy-copy',
    InnerURL: '//10.0.0.4/',
    URL: '',
  },
  {
    AppName: 'plex',
    IconType: 'icon-plex',
    InnerURL: '//10.0.0.2:32400/',
    URL: '',
  },
  {
    AppName: 'download',
    IconType: 'icon-xunlei1193424easyiconnet',
    InnerURL: '',
    URL: '',
  },
  {
    AppName: 'rss',
    IconType: 'icon-rss',
    InnerURL: '',
    URL: '',
  },
  {
    AppName: 'gitlab',
    IconType: 'icon-gitlab',
    InnerURL: '',
    URL: '',
  },
  {
    AppName: 'book',
    IconType: 'icon-kindle',
    InnerURL: '',
    URL: '',
  },
  {
    AppName: 'music',
    IconType: 'icon-Music',
    InnerURL: '',
    URL: '',
  },
  {
    AppName: 'blob',
    IconType: 'icon-blog',
    InnerURL: '',
    URL: '',
  },
];
const OuterDomain = '';

const IconFontCN = createFromIconfontCN({
  scriptUrl: iconURL,
});
export { IconFontCN, AppProps, AppInfo, LineMaxAppSize, OuterDomain };
