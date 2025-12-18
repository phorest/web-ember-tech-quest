import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SidebarComponent extends Component {
  @tracked sidebarOpen = false;
  @tracked showModal = false;

  navigation = [
    { name: 'Clients', href: '/clients', icon: 'users', current: true },
    { name: 'Projects', href: '#', icon: 'folder', current: false },
    { name: 'Calendar', href: '#', icon: 'calendar', current: false },
    { name: 'Documents', href: '#', icon: 'document-duplicate', current: false },
    { name: 'Reports', href: '#', icon: 'chart-pie', current: false },
  ];

  teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
  ];

  @action
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  @action
  closeSidebar() {
    this.sidebarOpen = false;
  }

  @action
  openModal() {
    this.showModal = true;
  }

  @action
  closeModal() {
    this.showModal = false;
  }
}
