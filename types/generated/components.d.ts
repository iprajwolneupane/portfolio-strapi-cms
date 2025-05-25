import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    cv_url: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    github_url: Schema.Attribute.String & Schema.Attribute.Required;
    linked_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ActivitiesActivities extends Struct.ComponentSchema {
  collectionName: 'components_activities_activities';
  info: {
    displayName: 'Activities';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    description: '';
    displayName: 'Project';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    live_url: Schema.Attribute.String;
    repo_url: Schema.Attribute.String;
    skills: Schema.Attribute.Component<'skill.skill', true> &
      Schema.Attribute.Required;
    slug: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SkillSkill extends Struct.ComponentSchema {
  collectionName: 'components_skill_skills';
  info: {
    description: '';
    displayName: 'Skill';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface TestimonialTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'activities.activities': ActivitiesActivities;
      'project.project': ProjectProject;
      'skill.skill': SkillSkill;
      'testimonial.testimonial': TestimonialTestimonial;
    }
  }
}
