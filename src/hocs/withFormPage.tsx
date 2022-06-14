import React from 'react';
import { FormPage } from 'layouts';

type Props = {};

export const withFormPage =
  (title: string) => (ContentComponent: any) => (props: Props) =>
    (
      <FormPage title={title}>
        <ContentComponent {...props} />
      </FormPage>
    );
