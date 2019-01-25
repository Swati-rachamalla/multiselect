import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  data = [{
    component: 'title',
    data: 'Sample Title'
  }, {
    component: 'content',
    data: 'Sample content to describe title'
  }, {
    component: 'note',
    data: 'Sample note in case needed'
  }, {
    component: 'demoContainer',
    data: {
      component: 'lazyLoading',
      tsCode: 'aW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJzsKaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7CmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi9hcHAuc2VydmljZSc7CgpAQ29tcG9uZW50KHsKICBzZWxlY3RvcjogJ21zLW9wdGlvbnMtbGF6eS1sb2FkaW5nJywKICB0ZW1wbGF0ZVVybDogJy4vb3B0aW9ucy1sYXp5LWxvYWRpbmcuY29tcG9uZW50Lmh0bWwnLAogIHN0eWxlVXJsczogWycuL29wdGlvbnMtbGF6eS1sb2FkaW5nLmNvbXBvbmVudC5jc3MnXQp9KQpleHBvcnQgY2xhc3MgT3B0aW9uc0xhenlMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsKICAKICBwZXJzb25zOwogIHBlcnNvbnNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjsKCiAgY29uc3RydWN0b3IgKHByaXZhdGUgYXBwU2VydmljZTogQXBwU2VydmljZSkge30KCiAgcGVyc29uOiBhbnkgPSB7aWQ6IDIsIG5hbWU6ICdQZXJzb24gMSd9CiAgCiAgbmdPbkluaXQoKTogdm9pZCB7CiAgICB0aGlzLnBlcnNvbnNTdWJzY3JpcHRpb24gPSB0aGlzLmFwcFNlcnZpY2UuZ2V0UGVyc29ucygpLnN1YnNjcmliZSgKICAgICAgZGF0YSA9PiB7CiAgICAgICAgdGhpcy5wZXJzb25zID0gWy4uLmRhdGFdCiAgICAgIH0KICAgICkKICB9CgogIG5nT25EZXN0cm95ICgpIHsKICAgIHRoaXMucGVyc29uc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpOwogIH0KCn0K',
      htmlCode: 'PGgyPlNpbmdsZSBTZWxlY3QgKExhenkgbG9hZGluZyBvcHRpb25zKTwvaDI+CjxuZ3gtbXVsdGlzZWxlY3QgCiAgWyhuZ01vZGVsKV09InBlcnNvbiIKICBbb3B0aW9uc109InBlcnNvbnMiCiAgbmdEZWZhdWx0Q29udHJvbAo+PC9uZ3gtbXVsdGlzZWxlY3Q+Cgo8Yj5TZWxlY3RlZCBQZXJzb246IDwvYj4ge3twZXJzb24gfCBqc29ufX0=',
      cssCode: ''
    }
  }, {
    component: 'content',
    data: 'this content will contain another description'
  }];

  constructor() { }

  ngOnInit() { }

}
