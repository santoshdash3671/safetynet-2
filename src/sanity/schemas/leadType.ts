import { defineField, defineType } from "sanity";

export const leadType = defineType({
  name: "lead",
  title: "Lead / Enquiry",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "locality",
      title: "Locality",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "service",
      title: "Service Requested",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      readOnly: true,
    }),
    defineField({
      name: "source",
      title: "Source",
      description: "Which form/popup this lead came from",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "createdAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["New", "Contacted", "Converted", "Closed"],
      },
      initialValue: "New",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "phone",
      date: "createdAt",
    },
    prepare({ title, subtitle, date }) {
      return {
        title: title || "Anonymous",
        subtitle: `${subtitle || "No phone"} - ${date ? new Date(date).toLocaleDateString() : "Unknown date"}`,
      };
    },
  },
});
