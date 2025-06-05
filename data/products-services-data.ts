export interface ProductDetailProps {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    longDescription: string;
    benefits: {
        column1: Array<{ id: number; text: string }>;
        column2: Array<{ id: number; text: string }>;
    };
    features: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
    backgroundImage: string;
    productImage: string;
}

export const productData: Record<string, ProductDetailProps> = {
    poker: {
        id: "poker",
        name: "Poker",
        subtitle: "World's only hydraulic pusher / poker with 360 rotation",
        description:
            "For Furnace up to 50T. Option of choose single poker for two furnace",
        longDescription:
            "3S Engineers proudly presents the world's only Hydraulic Pusher Poker with 306 Degree rotation - a revolutionary breakthrough in heavy industrial equipment, engineered for unmatched performance, precision, and versatility in high-temperature or material-handling application",
        benefits: {
            column1: [
                { id: 1, text: "360 degree rotation scrap poker" },
                { id: 2, text: "Avoid damage to apc hood" },
                { id: 3, text: "Compatibility w/ Dog House APC" },
                { id: 4, text: "No idle time" },
                { id: 5, text: "Safety" },
            ],
            column2: [
                { id: 1, text: "Faster Furnace Feeding" },
                { id: 2, text: "Low Maintenance Design" },
                { id: 3, text: "Enhanced Plant Efficiency" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our team of engineers brings decades of experience in industrial equipment design",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Designed to maximize operational efficiency while minimizing maintenance costs",
            },
            {
                icon: "quality",
                title: "Quality Product",
                description:
                    "Built with premium materials and rigorous quality control standards",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
    "plc-systems": {
        id: "plc-systems",
        name: "PLC Systems",
        subtitle:
            "Advanced programmable logic controllers for industrial automation",
        description:
            "State-of-the-art PLC systems for precise control of industrial processes",
        longDescription:
            "Our PLC systems represent the cutting edge of industrial automation technology, offering unparalleled control, monitoring, and optimization capabilities for manufacturing processes of all scales. Designed with flexibility and reliability in mind, these systems can be tailored to meet the specific requirements of your operation.",
        benefits: {
            column1: [
                { id: 1, text: "Real-time process control" },
                { id: 2, text: "Modular expandable design" },
                { id: 3, text: "Industry-standard communication protocols" },
                { id: 4, text: "Compact form factor" },
            ],
            column2: [
                { id: 1, text: "Reduced downtime" },
                { id: 2, text: "Increased production efficiency" },
                { id: 3, text: "Comprehensive data logging" },
                { id: 4, text: "Remote monitoring capabilities" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our PLC specialists have implemented solutions across diverse industrial sectors",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Optimized designs that deliver maximum functionality at competitive price points",
            },
            {
                icon: "quality",
                title: "Quality Product",
                description:
                    "Industrial-grade components built to withstand harsh operating environments",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
    "scada-solutions": {
        id: "scada-solutions",
        name: "SCADA Solutions",
        subtitle:
            "Comprehensive supervisory control and data acquisition systems",
        description:
            "Integrated SCADA solutions for real-time monitoring and control of industrial processes",
        longDescription:
            "Our SCADA solutions provide a centralized system for monitoring and controlling entire sites or complexes of systems spread out over large areas. Designed with scalability in mind, our systems collect and analyze real-time data to help you make informed decisions and optimize your operations.",
        benefits: {
            column1: [
                { id: 1, text: "Centralized monitoring and control" },
                { id: 2, text: "Customizable HMI interfaces" },
                { id: 3, text: "Comprehensive alarm management" },
                { id: 4, text: "Historical data trending" },
            ],
            column2: [
                { id: 1, text: "Improved operational visibility" },
                { id: 2, text: "Enhanced decision making" },
                { id: 3, text: "Increased system reliability" },
                { id: 4, text: "Reduced operational costs" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our SCADA engineers design intuitive yet powerful monitoring systems",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Scalable solutions that grow with your business needs",
            },
            {
                icon: "quality",
                title: "Quality Product",
                description:
                    "Reliable software and hardware integration for continuous operation",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
    robotics: {
        id: "robotics",
        name: "Robotics",
        subtitle: "Advanced industrial robotics for automation and precision",
        description:
            "Cutting-edge robotic systems designed for manufacturing and industrial applications",
        longDescription:
            "Our robotics solutions combine precision engineering with advanced control systems to deliver reliable automation for a wide range of industrial applications. From pick-and-place operations to complex assembly tasks, our robots are designed to enhance productivity, consistency, and safety in your manufacturing processes.",
        benefits: {
            column1: [
                { id: 1, text: "Increased production throughput" },
                { id: 2, text: "Consistent quality output" },
                { id: 3, text: "Reduced labor costs" },
                { id: 4, text: "Flexible deployment options" },
            ],
            column2: [
                { id: 1, text: "Enhanced workplace safety" },
                { id: 2, text: "Precision handling capabilities" },
                { id: 3, text: "24/7 operational capacity" },
                { id: 4, text: "Adaptable to changing production needs" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our robotics team specializes in custom automation solutions",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Rapid ROI through increased productivity and reduced errors",
            },
            {
                icon: "quality",
                title: "Quality Product",
                description:
                    "Precision-engineered systems with industry-leading reliability",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
    "industrial-automation": {
        id: "industrial-automation",
        name: "Industrial Automation",
        subtitle: "Complete automation solutions for manufacturing processes",
        description:
            "Integrated systems designed to optimize and automate industrial operations",
        longDescription:
            "Our industrial automation solutions combine hardware, software, and expert engineering to transform manual processes into efficient, automated operations. We design and implement custom automation systems that increase productivity, improve quality, and reduce costs across your entire manufacturing facility.",
        benefits: {
            column1: [
                { id: 1, text: "Streamlined production processes" },
                { id: 2, text: "Reduced manual intervention" },
                { id: 3, text: "Improved product consistency" },
                { id: 4, text: "Enhanced operational visibility" },
            ],
            column2: [
                { id: 1, text: "Lower operational costs" },
                { id: 2, text: "Increased production capacity" },
                { id: 3, text: "Better resource utilization" },
                { id: 4, text: "Improved workplace safety" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our automation engineers design end-to-end solutions for complex processes",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Optimized systems that maximize productivity while minimizing waste",
            },
            {
                icon: "quality",
                title: "Quality Product",
                description:
                    "Reliable automation solutions built for long-term operation",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
    "control-systems": {
        id: "control-systems",
        name: "Control Systems",
        subtitle: "Advanced control systems for precise process management",
        description:
            "Sophisticated control solutions for complex industrial processes",
        longDescription:
            "Our control systems provide the intelligence and precision needed to manage complex industrial processes. From basic feedback loops to advanced model predictive control, we design and implement control strategies that optimize performance, ensure consistency, and maximize efficiency in your operations.",
        benefits: {
            column1: [
                { id: 1, text: "Precise process control" },
                { id: 2, text: "Reduced process variability" },
                { id: 3, text: "Optimized resource consumption" },
                { id: 4, text: "Automated quality control" },
            ],
            column2: [
                { id: 1, text: "Enhanced product quality" },
                { id: 2, text: "Improved energy efficiency" },
                { id: 3, text: "Reduced waste generation" },
                { id: 4, text: "Simplified operator interfaces" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our control engineers specialize in complex process optimization",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Systems designed to minimize resource consumption and maximize output",
            },
            {
                icon: "quality",
                title: "Quality Product",
                description:
                    "Reliable control solutions that maintain precise operating parameters",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
    "sensors-actuators": {
        id: "sensors-actuators",
        name: "Sensors & Actuators",
        subtitle:
            "High-quality sensing and actuation devices for industrial applications",
        description:
            "Precision sensors and reliable actuators for monitoring and control",
        longDescription:
            "Our comprehensive range of sensors and actuators forms the foundation of effective industrial automation and control systems. We provide high-quality devices that accurately measure process variables and precisely control physical movements, ensuring your systems operate with optimal efficiency and reliability.",
        benefits: {
            column1: [
                { id: 1, text: "Accurate process measurement" },
                { id: 2, text: "Reliable actuation" },
                { id: 3, text: "Extended service life" },
                { id: 4, text: "Industrial-grade durability" },
            ],
            column2: [
                { id: 1, text: "Improved process control" },
                { id: 2, text: "Enhanced system reliability" },
                { id: 3, text: "Reduced maintenance requirements" },
                { id: 4, text: "Compatibility with existing systems" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our specialists select optimal sensing and actuation technologies for each application",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Quality components that deliver reliable performance at competitive prices",
            },
            {
                icon: "quality",
                title: "Quality Product",
                description:
                    "Industrial-grade devices built to withstand harsh operating environments",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
};

export const serviceData: Record<string, ProductDetailProps> = {
    "system-integration": {
        id: "system-integration",
        name: "System Integration",
        subtitle: "Seamless integration of various systems and components",
        description:
            "Comprehensive integration services to unify disparate systems into a cohesive solution",
        longDescription:
            "Our system integration services bring together hardware, software, and processes to create unified, efficient operational environments. We specialize in connecting legacy systems with modern technologies, ensuring smooth data flow and operation across your entire infrastructure.",
        benefits: {
            column1: [
                { id: 1, text: "Unified operational platform" },
                { id: 2, text: "Streamlined data exchange" },
                { id: 3, text: "Elimination of data silos" },
                { id: 4, text: "Improved cross-system visibility" },
            ],
            column2: [
                { id: 1, text: "Enhanced operational efficiency" },
                { id: 2, text: "Reduced manual data entry" },
                { id: 3, text: "Simplified system management" },
                { id: 4, text: "Future-proof architecture" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our integration specialists have experience with diverse systems and protocols",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Maximize the value of existing investments while adding new capabilities",
            },
            {
                icon: "quality",
                title: "Quality Service",
                description:
                    "Methodical approach ensuring reliable, maintainable integrated systems",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
    "maintenance-support": {
        id: "maintenance-support",
        name: "Maintenance & Support",
        description:
            "Comprehensive maintenance and support services for industrial systems",
        subtitle:
            "Ensuring optimal performance and reliability of your systems",
        longDescription:
            "Our maintenance and support services are designed to maximize the uptime and longevity of your industrial systems. From preventive maintenance programs to emergency support, we provide the expertise and resources needed to keep your operations running smoothly.",
        benefits: {
            column1: [
                { id: 1, text: "Reduced unplanned downtime" },
                { id: 2, text: "Extended equipment lifespan" },
                { id: 3, text: "Optimized system performance" },
                { id: 4, text: "Predictable maintenance costs" },
            ],
            column2: [
                { id: 1, text: "Rapid response to issues" },
                { id: 2, text: "Proactive problem prevention" },
                { id: 3, text: "Regular system updates" },
                { id: 4, text: "Detailed maintenance records" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our maintenance team has deep knowledge of industrial systems",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Preventive approach that minimizes costly emergency repairs",
            },
            {
                icon: "quality",
                title: "Quality Service",
                description:
                    "Comprehensive support ensuring maximum system reliability",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
    "technical-consulting": {
        id: "technical-consulting",
        name: "Technical Consulting",
        subtitle:
            "Expert guidance for industrial automation and control projects",
        description:
            "Specialized consulting services to optimize your technical operations",
        longDescription:
            "Our technical consulting services provide expert guidance for planning, implementing, and optimizing industrial automation and control systems. We leverage our extensive industry experience to help you make informed decisions, solve complex problems, and achieve your operational goals.",
        benefits: {
            column1: [
                { id: 1, text: "Access to specialized expertise" },
                { id: 2, text: "Objective third-party perspective" },
                { id: 3, text: "Risk mitigation strategies" },
                { id: 4, text: "Technology roadmap development" },
            ],
            column2: [
                { id: 1, text: "Optimized system designs" },
                { id: 2, text: "Improved project outcomes" },
                { id: 3, text: "Knowledge transfer to your team" },
                { id: 4, text: "Industry best practice implementation" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our consultants bring decades of experience across diverse industries",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Targeted advice that maximizes return on technology investments",
            },
            {
                icon: "quality",
                title: "Quality Service",
                description:
                    "Thorough analysis and practical recommendations for real-world challenges",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
    "training-programs": {
        id: "training-programs",
        name: "Training Programs",
        subtitle:
            "Comprehensive training for industrial automation and control systems",
        description:
            "Specialized training programs to empower your team with essential skills",
        longDescription:
            "Our training programs are designed to equip your team with the knowledge and skills needed to effectively operate, maintain, and optimize your industrial systems. From basic operation to advanced troubleshooting, we offer customized training solutions that enhance your team's capabilities and confidence.",
        benefits: {
            column1: [
                { id: 1, text: "Enhanced team capabilities" },
                { id: 2, text: "Reduced dependence on external support" },
                { id: 3, text: "Improved system utilization" },
                { id: 4, text: "Faster problem resolution" },
            ],
            column2: [
                { id: 1, text: "Increased operational confidence" },
                { id: 2, text: "Better understanding of system capabilities" },
                { id: 3, text: "Improved workplace safety" },
                { id: 4, text: "Continuous skill development" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our trainers are experienced practitioners with real-world expertise",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Targeted training that delivers immediate operational benefits",
            },
            {
                icon: "quality",
                title: "Quality Service",
                description:
                    "Hands-on, practical training focused on your specific systems",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
    "custom-solutions": {
        id: "custom-solutions",
        name: "Custom Solutions",
        subtitle: "Tailored solutions for unique industrial challenges",
        description:
            "Specialized engineering services for complex or unique requirements",
        longDescription:
            "Our custom solutions service addresses unique challenges that cannot be solved with off-the-shelf products. We combine innovative engineering, specialized knowledge, and creative problem-solving to develop tailored solutions that precisely meet your specific operational requirements and constraints.",
        benefits: {
            column1: [
                { id: 1, text: "Solutions precisely matched to needs" },
                { id: 2, text: "Addressing of unique challenges" },
                { id: 3, text: "Integration with existing systems" },
                { id: 4, text: "Proprietary competitive advantage" },
            ],
            column2: [
                { id: 1, text: "Optimized for your specific environment" },
                { id: 2, text: "Scalable to evolving requirements" },
                { id: 3, text: "Ownership of custom intellectual property" },
                { id: 4, text: "Ongoing development support" },
            ],
        },
        features: [
            {
                icon: "technical",
                title: "Technical Expertise",
                description:
                    "Our engineers specialize in solving complex, unique challenges",
            },
            {
                icon: "cost",
                title: "Cost Efficient",
                description:
                    "Targeted solutions that deliver specific operational benefits",
            },
            {
                icon: "quality",
                title: "Quality Service",
                description:
                    "Rigorous development process ensuring reliable, maintainable solutions",
            },
        ],
        backgroundImage: "/placeholder.svg?height=600&width=1200",
        productImage: "/placeholder.svg?height=400&width=600",
    },
};
