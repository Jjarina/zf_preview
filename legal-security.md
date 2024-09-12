---
layout: content-template
permalink: /security
title: Protecting Your User Data with Zoomforth - Security
description: Learn how Zoomforth works to keep information secure.
noindex: true
page_heading: Introduction to Zoomforth Security
---

A key reason enterprise communications have lagged behind consumer communications is a lack of enterprise readiness by vendors on issues like privacy, security, and authentication.  

Zoomforth is built on a robust security architecture that provides you with the control you need to secure your users, content, and digital experiences. Here are some commonly asked questions.

## Is Zoomforth subject to external audit?

Yes. SOC 2 is an internationally recognized set of compliance standards for cloud-based service providers. It requires companies to establish and follow strict information security policies and procedures.  

Zoomforth is compliant with SOC 2 standards for security and confidentiality. Please contact us for a copy of our latest, independent SOC 2 Type II audit report.

## Where are Zoomforth sites hosted?

Zoomforth services and data are hosted in Amazon Web Services (AWS) facilities in the USA,  which allows us to scale and innovate while maintaining a secure environment.

AWS’s world-class, highly secure data centers utilize state-of-the art electronic surveillance and multi-factor access control systems. Data centers are staffed 24x7 by trained security guards, and access is authorized strictly on a least privileged basis. Environmental systems are designed to minimize the impact of disruptions to operations. And multiple geographic regions and Availability Zones allow you to remain resilient in the face of most failure modes, including natural disasters or system failures.

## SAML / Single Sign-On (SSO)

For enterprise customers, we integrate your company’s identity provider with your Zoomforth account using SAML, an open-standard for exchanging authentication and authorization data between parties. SAML allows you to take control over determining a user's identity, including any 2-factor authentication checks. This can be used in two ways:

* Logging into the platform as a user
* As a way to restrict site access to a specific audience

## Analytics

Zoomforth offers a comprehensive range of in-app data insights. If you would prefer to view these analytics in a central dashboard such as Adobe or Google Analytics, we will integrate on request.

## Can you restrict visitor access to sites?

For your microsites, we offer multiple authentication options so that you can ensure your audiences can securely access private content.

* Public - Anyone with the URL can access the page
* Password Protection - Only visitors who enter a password can access the page
* Single Sign-On (SAML) Authentication - Visitors are required to authenticate through a provider configured by our customer
* Email Authentication - This token-based method restricts page access based on a whitelist of email domains and addresses that you configure. Visitors must authenticate through a secure link they receive in their email account
* Multi-factor Authentication - Visitors are required to authenticate via email plus a unique code sent to their mobile device

## Can you set different permissions for users?

Yes. You can choose from four user roles, each of which has specific permissions. These range from full administration rights to restricted access to specific sites, editing tools and publishing rights

## Do you enforce strong password protocols?

Yes. Zoomforth enforces a password complexity standard and credentials are stored salted and hashed in our database using a PBKDF function (bcrypt). We follow NIST current best practices for passwords and password complexity.

## How safe is my data in the cloud?

Your data is extremely safe. All of our servers are within our own virtual private cloud (VPC) with network access control lists (ACLs) that prevent unauthorized requests getting to our internal network.

## How safe is my site content?

Your content is very secure. All client assets served from the AWS cloud are cryptographically signed with a timestamp which renders them non-functional after 30 minutes which means that access to content is both private and temporary. Multimedia content is encrypted at rest using Amazon S3 multifactor serverside encryption and access is given only to users authenticated through our service.

## Do you keep backups of my sites and data?

Zoomforth was built with business continuity and disaster recovery in mind. We maintain 30 days of backups for point-in-time recovery.

## Do you guarantee uptime?

Yes. We have greater than 99.9% uptime.

## Can Zoomforth employees access our data?

Access to customer data is granted on a ‘least privilege’ basis and is limited to a small number of authorized employees who require it to do their job. 

Zoomforth is served 100% over https. We run a zero-trust corporate network. There are no corporate resources or additional privileges from being on Zoomforth’s network. 

We have Single Sign-on (SSO), 2-factor authentication (2FA) and strong password policies for support agent access and the third party services we use (such as GitHub, Google, and AWS), to ensure access to cloud services are protected.

## Will our data be encrypted?

Yes. Data is encrypted at rest and in transit.  

Each multimedia data object is encrypted at rest with a unique key using Amazon S3’s strong, multi-factor server­side encryption. It uses AES256, one of the strongest block ciphers available, to encrypt your data.

For all application interaction, we use https. We encrypt user session cookies using SHA­512. Sensitive material such as the“forgot password” keys are encrypted using AES­256 and are time limited. These encryption keys are stored server­side only. We regularly rotate these keys.

## Do you carry out penetrations tests?

Zoomforth has engaged third-party security experts to regularly perform detailed penetration tests on the Zoomforth application and infrastructure. Copies of our latest pentest reports are available as part of the procurement process.

## What is your service level for handling security incidents?

Zoomforth implements a protocol for handling security events which includes escalation procedures, rapid mitigation, post mortem, and notification of affected customers within 1 - 24 hours, depending on severity. All employees are informed of our policies.

## What security governance do you have in place?

Zoomforth has a comprehensive set of security policies including:

* Information Security & Protection
* Incident Management & Breach Response
* Change, Release Management & Security Patching 
* Data Classification, Retention, Disposal & Handling
* Device Management, Remote Access & Teleworking
* Disaster Recovery & Business Continuity
* User Access Control
* Acceptable Use 
* Vendor Evaluation & Licensing
* Internal Risk Management
* Whistleblowing

These policies are reviewed and updated frequently and shared with all employees. Copies of our policies are available as part of the procurement process.

## Do you have a risk management framework?

Yes. Zoomforth maintains a comprehensive risk register which is regularly reviewed by senior leadership, internal audit and external auditors.

## What security measures do you take with regard to your staff?

Zoomforth performs background checks on all new employees in accordance with local laws. The background check includes 5-year employment history verification and a criminal record check.  

All employee contracts include a comprehensive confidentiality agreement and each employee is required to sign a Data Protection Agreement.   

All employees complete Security and Awareness training annually. The importance of data security is regularly reiterated in team-wide meetings throughout the year.

## What technical support do you offer?

We offer in-app support and prioritized email support for security incidents that are reported to <a href="mailto:security@zoomforth.com">security@zoomforth.com</a>.  

Our technical support team is available from 12am - 6pm Pacific Time and can be contacted via the platform. 

