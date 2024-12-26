import type { Schema, Struct } from '@strapi/strapi';

export interface DateRangeCatDateRange extends Struct.ComponentSchema {
  collectionName: 'components_date_range_cat_date_ranges';
  info: {
    displayName: 'Date Range';
    icon: 'rocket';
  };
  attributes: {
    EndDate: Schema.Attribute.Date & Schema.Attribute.Required;
    StartDate: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'date-range-cat.date-range': DateRangeCatDateRange;
    }
  }
}
