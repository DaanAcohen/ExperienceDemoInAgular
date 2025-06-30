import { Component } from '@angular/core';
import { Slide } from '../models/slide.model';

@Component({
  selector: 'app-carousel-host',
  templateUrl: './carousel-host.component.html'
})
export class CarouselHostComponent {
  /** Example dataset—could come from a service or API */
  public slides: Slide[] = [
    {
      title: '.NET Back‑end Development',
      content: 'Over sixteen years of professional work with the full Microsoft .NET stack, from .NET Framework to.NET8, building robust back‑end services for finance, media and healthcare clients. Daan regularly applies LINQ, Entity Framework(Core) and ASP.NET Core to deliver high‑performance, maintainable APIs.'
    },
    {
      title: 'Test Automation & TDD',
      content: 'Since 2010 Daan has embedded unit, integration and security tests — using xUnit, NUnit, Selenium, Robot Framework and SpecFlow — into virtually every project, often evangelising Test‑Driven Development within client teams. This discipline has improved code quality and accelerated release cycles across multiple regulated domains.'
    },
    {
      title: 'CI/CD Engineering',
      content: 'Daan designs and maintains automated pipelines with Azure DevOps, TeamCity, GitHub Actions, Jenkins and Octopus Deploy, integrating static analysis and automated testing for continuous delivery. These pipelines support containerised and serverless workloads across Azure and AWS.'
    },
    {
      title: 'Cloud Platforms (Azure & AWS)',
      content: 'Experienced in architecting and operating workloads on Azure Web Apps, Container Apps, Functions, Service Bus and SQL Database, as well as AWS EC2, S3 and Kubernetes (EKS). Daan routinely leverages infrastructure‑as‑code and managed services to ensure secure, scalable deployments.'
    },
    {
      title: 'Infrastructure‑as‑Code (Terraform)',
      content: 'Daan authored and now maintains Terraform modules — including a custom Terraform provider written in Go — and ARM/Bicep templates to guarantee reproducible environments. This approach underpins ISO 27001‑compliant infrastructure for several clients.'
    },
    {
      title: 'Docker Kubernetes',
      content: 'Daan has containerised .NET, Node.js and Python workloads with Docker and orchestrated them via Kubernetes (AKS/EKS and on‑prem clusters), enabling microservice scalability and simplified local development. He has also introduced container security scanning into CI/CD workflows.'
    },
    {
      title: 'Microservices & Distributed Architecture',
      content: 'Daan has designed and implemented event‑driven microservice systems with clear bounded contexts, GraphQL gateways and asynchronous messaging. This pattern supports high‑volume platforms in telecom, media streaming and healthcare.'
    },
    {
      title: 'Messaging & Event Streaming',
      content: 'Proficient with Azure Service Bus, RabbitMQ, MassTransit, AWS SQS/SNS and Kafka‑style patterns, Daan achieves reliable, decoupled communication. He often pairs these tools with outbox patterns and monitoring dashboards for end‑to‑end traceability.'
    },
    {
      title: 'Database Design (SQL &NoSQL)',
      content: 'Hands‑on with SQL Server, PostgreSQL, SQLite and MongoDB, Daan creates performant schemas, migrations and ORM mappings. His work frequently balances relational consistency with document‑store flexibility.'
    },
    {
      title: 'Security & ISO 27001',
      content: 'Daan led a development team through a successful ISO 27001 audit, embedding secure‑by‑design processes and tooling. Additionally, he researches and builds solutions around post‑quantum cryptography through his QuantumSafeAudit web application.'
    },
    {
      title: 'Programming Languages (C#, Go, Python, JavaScript/TypeScript)',
      content: 'Native in modern C# yet equally comfortable writing Go (for Terraform provider work), Python (scientific and automation scripts) and full‑stack JavaScript/TypeScript (React Tailwind). This polyglot skillset lets Daan pick the right tool for each component.'
    },
    {
      title: 'Open Source & Community',
      content: 'Maintainer of multiple NuGet packages — most notably Refit.OpenAI — and active author on CodeProject, publishing technical articles and sample code. Daan is also the founder of the “.NETherlands” meetup group, where he presents and mentors peers.'
    },
    {
      title: 'Scientific & Healthcare Domain Expertise',
      content: 'An MSc in Bio‑Pharmaceutical Sciences and early career in computational chemistry give Daan unique insight into laboratory and healthcare workflows. He has applied this knowledge to develop bioinformatics, compliance and regulatory software for GenDx, Vektis and other medical clients.'
    }
  ];

}