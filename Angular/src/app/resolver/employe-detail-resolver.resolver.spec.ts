import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { employeDetailResolverResolver } from './employe-detail-resolver.resolver';

describe('employeDetailResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => employeDetailResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
