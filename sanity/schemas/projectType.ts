import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  initialValue: {
    isPublished: true,
    projectType: 'caseStudy',
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Card title',
      type: 'string',
      description: 'Maps to the large project card heading.',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'yearLabel',
      title: 'Year label',
      type: 'string',
      description: 'Example: 2026',
      validation: (rule) => rule.required().max(20),
    }),
    defineField({
      name: 'clientLabel',
      title: 'Client label',
      type: 'string',
      description: 'Example: Allica Bank',
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: 'cardSupportingText',
      title: 'Card supporting text',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
      validation: (rule) => rule.max(180),
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        defineField({
          name: 'metric',
          title: 'Metric',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required().max(30),
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (rule) => rule.required().max(30),
            }),
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'overviewText',
      title: 'Overview text',
      type: 'text',
      rows: 10,
      description: 'Supports the current line break, bullet, link, and strong-tag rendering pattern.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'deepDiveTitle',
      title: 'Deep dive title',
      type: 'string',
      validation: (rule) => rule.max(80),
    }),
    defineField({
      name: 'deepDiveDescription',
      title: 'Deep dive description',
      type: 'text',
      rows: 8,
      hidden: ({ document }) => !document?.deepDiveTitle,
    }),
    defineField({
      name: 'deepDiveStatLabel',
      title: 'Deep dive stat label',
      type: 'string',
      hidden: ({ document }) => !document?.deepDiveTitle,
      validation: (rule) => rule.max(40),
    }),
    defineField({
      name: 'deepDiveStatValue',
      title: 'Deep dive stat value',
      type: 'string',
      hidden: ({ document }) => !document?.deepDiveTitle,
      validation: (rule) => rule.max(40),
    }),
    defineField({
      name: 'projectType',
      title: 'Project type',
      type: 'string',
      initialValue: 'caseStudy',
      options: {
        layout: 'radio',
        list: [
          { title: 'Case study', value: 'caseStudy' },
          { title: 'Live demo', value: 'liveDemo' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'liveDemoKey',
      title: 'Live demo key',
      type: 'string',
      description: 'Use "tetris" for the existing playable Tetris project.',
      hidden: ({ document }) => document?.projectType !== 'liveDemo',
      options: {
        list: [{ title: 'Tetris', value: 'tetris' }],
      },
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientLabel',
    },
  },
});
