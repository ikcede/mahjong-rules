import { writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { generateRulesFromTemplate } from '../src/generator/generate-rules';
import { Template } from '../src/generator/types/template';
import { CommonRule } from '../src/types/common';

// Load rule data
import commonRulesData from '../data/rules/common-rules.json';
import hkRulesData from '../data/rules/hk-rules.json';

// Combine all rules into a single array
const allRules: CommonRule[] = [...commonRulesData, ...hkRulesData];

// Function to load all templates from the templates directory
async function loadTemplates(): Promise<
  { name: string; template: Template }[]
> {
  const templatesDir = join(
    __dirname,
    '..',
    'src',
    'generator',
    'templates'
  );
  const templateFiles = readdirSync(templatesDir).filter((file) =>
    file.endsWith('.ts')
  );

  const templates: { name: string; template: Template }[] = [];

  for (const file of templateFiles) {
    const templateName = file.replace('.ts', '');
    try {
      // Dynamic import of the template
      const templateModule = await import(
        `../src/generator/templates/${templateName}`
      );
      if (templateModule.TEMPLATE) {
        templates.push({
          name: templateName,
          template: templateModule.TEMPLATE as Template,
        });
      }
    } catch (error) {
      console.error(`Failed to load template ${templateName}:`, error);
    }
  }

  return templates;
}

// Main function to generate all variants
async function generateAllVariants() {
  console.log('Loading templates...');
  const templates = await loadTemplates();

  console.log(`Found ${templates.length} templates`);
  console.log(
    `Loaded ${allRules.length} rules (${commonRulesData.length} common + ${hkRulesData.length} HK)`
  );

  for (const { name, template } of templates) {
    console.log(`\nGenerating variant for template: ${name}`);

    try {
      // Generate the variant using the template and combined rules
      const variant = generateRulesFromTemplate(template, allRules);

      // Create output filename
      const outputFilename = `${name}.json`;
      const outputPath = join(
        __dirname,
        '..',
        'data',
        'styles',
        outputFilename
      );

      // Write the generated variant to a JSON file
      writeFileSync(outputPath, JSON.stringify(variant, null, 2));

      console.log(
        `✓ Generated ${variant.rules.length} rules for ${variant.name}`
      );
      console.log(`  Output: ${outputPath}`);
    } catch (error) {
      console.error(`✗ Failed to generate variant for ${name}:`, error);
    }
  }

  console.log('\nGeneration complete!');
}

// Run the script if called directly
if (require.main === module) {
  generateAllVariants().catch(console.error);
}

export { generateAllVariants };
