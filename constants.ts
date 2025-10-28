
import type { Question, Topic } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    question: "Plasmodium falciparum is the causative agent of:",
    options: [
      "Malignant tertian malaria (48 hour cycles of fever)",
      "Benign tertian malaria",
      "Quartan malaria (72 hour cycles of fever)",
      "None of the above"
    ],
    correctAnswerIndex: 0,
    explanation: "P. falciparum causes malignant tertian malaria, the most severe type, with a 48-hour cycle of fever. The term 'malignant' refers to its high parasite load and potential for severe complications like cerebral malaria. P. vivax causes benign tertian malaria, and P. malariae causes quartan malaria."
  },
  {
    question: "Plasmodium vivax is the causative agent of:",
    options: [
      "Malignant tertian malaria (48 hour cycles of fever)",
      "Benign tertian malaria (48 hour cycles of fever)",
      "Quartan malaria (72 hour cycles of fever)",
      "None of the above"
    ],
    correctAnswerIndex: 1,
    explanation: "P. vivax causes benign tertian malaria, which also has a 48-hour fever cycle but is generally less severe than P. falciparum. It is called 'benign' because it rarely causes the severe complications seen with falciparum malaria. It is also known for having a dormant liver stage (hypnozoites) that can cause relapses."
  },
  {
    question: "Plasmodium malariae is the causative agent of:",
    options: [
      "Quartan malaria (72 hour cycles of fever)",
      "Malignant tertian malaria (48 hour cycles of fever)",
      "Benign tertian malaria (48 hour cycles of fever)",
      "West Africa tertian malaria"
    ],
    correctAnswerIndex: 0,
    explanation: "P. malariae is distinct for causing quartan malaria, characterized by a 72-hour cycle between fever episodes. This longer cycle is due to the slower maturation of the parasite in red blood cells. It can lead to chronic infections and nephrotic syndrome."
  },
  {
    question: "Toxoplasma gondii is a protozoal sporozoa parasite which has a sexual life cycle in:",
    options: [
      "The human",
      "The dog",
      "The cat",
      "The pig"
    ],
    correctAnswerIndex: 2,
    explanation: "Toxoplasma gondii is a coccidian parasite of cats. The sexual cycle occurs exclusively in the intestinal epithelium of felines (the definitive host), which then excrete infectious oocysts. Humans, dogs, and pigs are intermediate hosts where the asexual cycle occurs."
  },
  {
    question: "In Toxoplasma gondii, the infective stage for human during the sexual life is:",
    options: [
      "The oocytes",
      "The tachyzoites",
      "The bradyzoites",
      "None of the above"
    ],
    correctAnswerIndex: 0,
    explanation: "Humans are infected by ingesting oocysts in food or water soiled with cat faeces, or by eating undercooked meat containing tissue cysts (bradyzoites). Tachyzoites are the rapidly multiplying form responsible for acute infection, but oocysts and bradyzoites are the primary infective stages from the environment and food, respectively."
  },
  {
    question: "Leishmania is a protozoal haemoflagellate parasite which is transported to human by the bite of:",
    options: [
      "Tsetse fly",
      "House fly",
      "Sand fly",
      "Horse fly"
    ],
    correctAnswerIndex: 2,
    explanation: "Leishmania species are intracellular parasites of humans, transmitted by the bites of phlebotomine sandflies. The tsetse fly transmits Trypanosoma brucei (sleeping sickness)."
  },
  {
    question: "In the Leishmania species life cycle, the infective stage for human is:",
    options: [
      "The amastigote",
      "The promastigote",
      "The trypomastigote",
      "The gametocytes"
    ],
    correctAnswerIndex: 1,
    explanation: "The promastigote is the elongated, flagellated form that develops in the midgut of the sandfly host. It is injected into humans during a bite and is the infective stage. Once inside human macrophages, it transforms into the amastigote, the replicating form."
  },
  {
    question: "Leishmania donovani is the causative agent of:",
    options: [
      "Kala-azar visceral leishmaniasis",
      "Oriental sore cutaneous leishmaniasis",
      "American cutaneous leishmaniasis",
      "None of the above"
    ],
    correctAnswerIndex: 0,
    explanation: "The L. donovani complex causes kala-azar (visceral leishmaniasis), a severe systemic disease characterized by fever, weight loss, and massive enlargement of the spleen and liver (hepatosplenomegaly). L. tropica causes cutaneous leishmaniasis (oriental sore)."
  },
  {
    question: "Leishmania tropica is the causative agent of:",
    options: [
      "Kala-azar visceral leishmaniasis",
      "Oriental sore cutaneous leishmaniasis",
      "New world cutaneous leishmaniasis",
      "None of the above"
    ],
    correctAnswerIndex: 1,
    explanation: "The L. tropica complex causes oriental sore (cutaneous leishmaniasis), a skin infection characterized by chronic, ulcerative sores. This is localized to the skin, unlike the systemic disease caused by L. donovani."
  },
  {
    question: "Trypanosoma brucei is the causative agent of:",
    options: [
      "Acute Chagas disease",
      "Chronic Chagas disease",
      "Human sleeping sickness",
      "None of the above"
    ],
    correctAnswerIndex: 2,
    explanation: "T. brucei lives and multiplies in the human bloodstream and invades the CNS to cause human African trypanosomiasis, or sleeping sickness. Chagas disease is caused by Trypanosoma cruzi."
  },
  {
    question: "Trypanosoma cruzi is the causative agent of:",
    options: [
      "Acute Chagas disease",
      "Chronic Chagas disease",
      "All of the above (meaning both A and B)",
      "None of the above"
    ],
    correctAnswerIndex: 2,
    explanation: "T. cruzi is an intracellular parasite causing both acute and chronic Chagas' disease. The acute phase can be asymptomatic or cause fever and swelling, while the chronic phase, developing years later, can lead to severe and life-threatening heart (cardiomyopathy) and gut (megacolon, megaesophagus) complications."
  },
  {
    question: "Rickettsiae are small aerobic bacteria which like other bacteria have the following except:",
    options: [
      "A cell wall with inner and outer membranes",
      "RNA and DNA",
      "Peptidoglycan in the cell wall",
      "Enzymes for energy metabolism"
    ],
    correctAnswerIndex: 3,
    explanation: "Unlike most bacteria, Rickettsiae are 'energy parasites.' They lack the metabolic pathways (like glycolysis and the Krebs cycle) to produce their own ATP, making them obligate intracellular parasites that must rely on the host cell's energy supply."
  },
  {
    question: "Rickettsia prowazeckii is the causative agent of:",
    options: [
      "Epidemic typhus",
      "Endemic typhus",
      "Scrub typhus",
      "None of the above"
    ],
    correctAnswerIndex: 0,
    explanation: "R. prowazekii causes epidemic louse-borne typhus. This form is called 'epidemic' because it can spread rapidly in crowded, unhygienic conditions where body lice are common, such as during wars or famines. Humans are the principal host."
  },
  {
    question: "Rickettsia typhi is the causative agent of:",
    options: [
      "Epidemic typhus",
      "Endemic typhus",
      "Scrub typhus",
      "None of the above"
    ],
    correctAnswerIndex: 1,
    explanation: "R. typhi causes endemic (or murine) typhus. It is 'endemic' because it is maintained in a natural reservoir of rats and is transmitted to humans by rat fleas. Cases are sporadic and do not typically cause large epidemics."
  },
  {
    question: "Coxiella burnetii is the causative agent of:",
    options: [
      "Scrub typhus",
      "Spotted fever",
      "Q fever",
      "None of the above"
    ],
    correctAnswerIndex: 2,
    explanation: "C. burnetii is the causative agent of Q fever. It is unique among Rickettsiaceae for its spore-like structures, which make it highly resistant in the environment, and its primary transmission route via inhalation of contaminated aerosols from infected animals (like cattle and sheep), rather than an insect vector."
  },
  {
    question: "Rickettsiae virulence varies between species due to the possible factors except:",
    options: [
      "Lipopolysaccharide",
      "Toxins",
      "Phospholipase A",
      "Cell destruction due to intracellular replication",
      "None of the above"
    ],
    correctAnswerIndex: 4,
    explanation: "All listed options (Lipopolysaccharide, toxins, Phospholipase A, and intracellular replication) are considered virulence factors for Rickettsiae, contributing to their ability to invade host cells, replicate, and cause disease. Therefore, 'None of the above' is the correct choice, as none of them is an exception."
  },
  {
    question: "Rickettsiae virulence varies between species due to the possible factors except:",
    options: [
      "Lipopolysaccharide",
      "Phospholipase A",
      "Toxins",
      "Phospholipase B"
    ],
    correctAnswerIndex: 3,
    explanation: "Phospholipase A is a known virulence factor used by Rickettsiae to dissolve the host cell's phagosomal membrane and escape into the cytoplasm to replicate. While other phospholipases exist in biology, Phospholipase B is not described as a key virulence factor for this genus."
  },
  {
    question: "Acute pyrexia of unknown origin is caused by which of the following bacteria:",
    options: [
      "Brucellosis",
      "Salmonellosis",
      "Tuberculosis",
      "All of the above"
    ],
    correctAnswerIndex: 3,
    explanation: "Classical Pyrexia of Unknown Origin (PUO) has a broad differential diagnosis. Infections are a primary cause, and this includes systemic bacterial infections like Brucellosis, Salmonellosis (Enteric fever/Typhoid), and extrapulmonary Tuberculosis. Therefore, all of the listed options are potential causes."
  },
  {
    question: "Acute pyrexia of unknown origin is caused by the following infections:",
    options: [
      "Brucellosis",
      "Tuberculosis",
      "Psittacosis",
      "All of the above"
    ],
    correctAnswerIndex: 3,
    explanation: "The list of infectious causes for PUO is extensive and includes zoonotic diseases like Brucellosis and Psittacosis (from birds), as well as chronic infections like Tuberculosis. Because many different infections can present this way, 'All of the above' is correct."
  },
  {
    question: "Acute pyrexia of unknown origin is classically defined as:",
    options: [
      "fever for 1 week without known cause",
      "fever for 2 weeks without known cause",
      "fever for 3 weeks without known cause",
      "fever for 4 weeks without known cause"
    ],
    correctAnswerIndex: 2,
    explanation: "Classically, PUO was defined by Petersdorf and Beeson in 1961 as a fever higher than 38.3°C (101°F) on several occasions, lasting for at least 3 weeks, for which no cause could be found after one week of inpatient investigation."
  },
  {
    question: "The most common cause of septicemia from a focal source in the skin is:",
    options: [
      "S. aureus",
      "S. epidermidis",
      "S. pyogenes",
      "all of the above"
    ],
    correctAnswerIndex: 3,
    explanation: "Skin is a common focal source for septicaemia. Causative organisms include Staphylococcus aureus (from boils or cellulitis), coagulase-negative staphylococci like S. epidermidis (often from IV lines), and Streptococcus pyogenes (from erysipelas or cellulitis). All are significant pathogens."
  },
  {
    question: "The most common cause of septicemia from a focal source in the heart is:",
    options: [
      "S. pyogenes",
      "S. agalactiae",
      "S. aureus",
      "all of the above"
    ],
    correctAnswerIndex: 3,
    explanation: "Septicemia originating from the heart (infective endocarditis) is commonly caused by bacteria that colonize heart valves. Key culprits include various species of Streptococci (like S. pyogenes, S. agalactiae, and viridans streptococci) and Staphylococci (especially S. aureus, which can cause acute, destructive endocarditis)."
  }
];

export const LEARNING_TOPICS: Topic[] = [
  {
    id: 'plasmodium',
    title: 'Plasmodium',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Plasmodia (Malaria)</h3>
      <p class="mb-4">Plasmodia are sporozoan parasites that cause malaria in humans. The infection is transmitted by female Anopheles mosquitoes.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Key Species:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">P. falciparum:</strong> Causes malignant tertian malaria, the most severe form. It has a 48-hour cycle of fever.</li>
        <li><strong class="text-slate-800">P. vivax:</strong> Causes benign tertian malaria, the most widely distributed form. It also has a 48-hour fever cycle and can cause relapses.</li>
        <li><strong class="text-slate-800">P. malariae:</strong> Causes quartan malaria, characterized by a 72-hour cycle of fever.</li>
        <li><strong class="text-slate-800">P. ovale:</strong> A cause of tertian malaria (48-hour cycle) in West Africa, relatively uncommon.</li>
      </ul>

      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Life Cycle & Pathogenesis:</h4>
      <p class="mb-2">The life cycle is complex, involving a sexual cycle in the mosquito and asexual cycles in human liver and red blood cells.</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li>A mosquito injects <strong class="text-slate-800">sporozoites</strong> into the human host.</li>
        <li>Sporozoites travel to the liver, mature, and release <strong class="text-slate-800">merozoites</strong>. This is the asymptomatic liver (exo-erythrocytic) stage.</li>
        <li>Merozoites invade red blood cells (erythrocytes) and multiply asexually. The rupture of these cells releases more merozoites, causing the clinical symptoms (fever, chills).</li>
        <li>Some parasites develop into male and female <strong class="text-slate-800">gametocytes</strong>, which are ingested by another mosquito during a blood meal, continuing the cycle.</li>
      </ul>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Clinical Features & Diagnosis:</h4>
      <p class="mb-2">The classic symptom is a paroxysm of fever, chills, and sweats. Anemia (due to red cell destruction) and splenomegaly are common. P. falciparum can cause severe malaria, including cerebral malaria, which is a medical emergency.</p>
      <p>The gold standard for diagnosis is the microscopic examination of a Giemsa-stained blood smear to identify the parasites.</p>
    `
  },
  {
    id: 'toxoplasma',
    title: 'Toxoplasma',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Toxoplasma gondii</h3>
      <p class="mb-4">T. gondii is a coccidian parasite whose primary host is the cat. The sexual cycle of the parasite occurs in cats, producing oocytes which are shed in the faeces.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Life Cycle & Transmission:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Definitive Host:</strong> The cat, where the sexual cycle occurs.</li>
        <li><strong>Intermediate Hosts:</strong> Humans and other animals become infected by ingesting <strong class="text-slate-800">oocytes</strong> from sources contaminated with cat faeces, or by consuming undercooked meat containing tissue cysts (<strong class="text-slate-800">bradyzoites</strong>).</li>
        <li><strong>Asexual Cycle in Humans:</strong> In humans, the asexual cycle produces <strong class="text-slate-800">tachyzoites</strong> (the rapidly multiplying form that causes acute disease) and <strong class="text-slate-800">bradyzoites</strong> (which form dormant tissue cysts, typically in muscle and brain).</li>
      </ul>

      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Clinical Significance:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Immunocompetent persons:</strong> Usually asymptomatic or a mild, flu-like illness.</li>
        <li><strong>Congenital Toxoplasmosis:</strong> A primary infection during pregnancy can be transmitted to the fetus, potentially causing serious damage (e.g., chorioretinitis, hydrocephalus, intracranial calcifications).</li>
        <li><strong>Immunocompromised Hosts:</strong> Reactivation of latent infection (from bradyzoite cysts) can be life-threatening, often causing encephalitis in patients with AIDS.</li>
      </ul>

      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Prevention:</h4>
      <p>Key prevention strategies include thoroughly cooking meat, washing hands after gardening or handling raw meat, and pregnant women avoiding the cleaning of cat litter boxes.</p>
    `
  },
  {
    id: 'leishmania',
    title: 'Leishmania',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Leishmania</h3>
      <p class="mb-4">Leishmania are protozoal haemoflagellates transmitted to humans by the bite of a <strong class="text-slate-800">sandfly</strong>. They are intracellular parasites that replicate within mammalian host cells, particularly macrophages.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Life Cycle & Key Forms:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">Promastigote:</strong> This is the elongated, flagellated, infective stage found in the sandfly. It is injected into the human during a bite.</li>
        <li><strong class="text-slate-800">Amastigote:</strong> This is the rounded, non-flagellated, replicating form found inside host macrophages in mammals.</li>
      </ul>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Key Species & Diseases:</h4>
       <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">L. donovani complex (Visceral Leishmaniasis):</strong> Also known as kala-azar, this is a severe systemic illness. It causes chronic fever, weight loss, massive hepatosplenomegaly (enlargement of liver and spleen), and pancytopenia. It is fatal if left untreated.</li>
        <li><strong class="text-slate-800">L. tropica complex (Cutaneous Leishmaniasis):</strong> Also known as oriental sore, this form causes localized skin lesions. It begins as a papule at the site of the sandfly bite, enlarges, and ulcerates, eventually healing to leave a depressed scar.</li>
      </ul>

      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Diagnosis:</h4>
      <p>Diagnosis is made by identifying amastigotes in tissue smears from bone marrow aspirates (for visceral) or skin lesion biopsies (for cutaneous).</p>
    `
  },
    {
    id: 'trypanosoma',
    title: 'Trypanosoma',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Trypanosoma</h3>
      <p class="mb-4">Trypanosomes are haemoflagellates that cause significant diseases in humans, transmitted by insect vectors.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Trypanosoma brucei (African Sleeping Sickness)</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Transmission:</strong> Transmitted by the tsetse fly. The parasite lives and multiplies in the human bloodstream and lymphatic system.</li>
        <li><strong>Stage 1 (Haemolymphatic):</strong> Characterized by fever, headaches, joint pains, and enlarged lymph nodes (Winterbottom's sign).</li>
        <li><strong>Stage 2 (Neurological):</strong> Occurs when the parasite crosses the blood-brain barrier. It leads to confusion, poor coordination, and disruption of the sleep cycle (hence 'sleeping sickness'), eventually progressing to coma and death if untreated.</li>
      </ul>

      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Trypanosoma cruzi (Chagas' Disease)</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Transmission:</strong> Transmitted by the reduviid ('kissing') bug. It is an intracellular parasite.</li>
        <li><strong>Acute Phase:</strong> Often asymptomatic or mild, but can cause fever and swelling at the site of inoculation (chagoma) or unilateral eyelid swelling (Romaña's sign).</li>
        <li><strong>Chronic Phase:</strong> Develops years later in 20-30% of infected individuals. It can lead to severe cardiac damage (cardiomyopathy, arrhythmias) and gastrointestinal complications (megacolon, megaesophagus).</li>
      </ul>
    `
  },
  {
    id: 'rickettsiae',
    title: 'Rickettsiae',
    category: 'Bacteriology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Rickettsiae</h3>
      <p class="mb-4">Rickettsiae are small, aerobic, Gram-negative bacteria that are obligate intracellular parasites, meaning they cannot replicate outside of a host cell.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Characteristics & Pathogenesis:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li>They have a typical bacterial cell structure but crucially <strong class="text-slate-800">lack enzymes for energy metabolism</strong>, forcing them to steal ATP from the host cell.</li>
        <li>The primary target cells are <strong class="text-slate-800">vascular endothelial cells</strong>. Replication inside these cells causes injury, leading to vasculitis (inflammation of blood vessels), increased vascular permeability, edema, and hemorrhage. This vasculitis is responsible for the characteristic rashes and multi-organ damage seen in rickettsial diseases.</li>
      </ul>
      
       <h4 class="font-semibold mb-2 mt-4 text-slate-600">Virulence Factors:</h4>
       <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">Lipopolysaccharide (LPS):</strong> An endotoxin that triggers inflammation.</li>
        <li><strong class="text-slate-800">Phospholipase A:</strong> An enzyme used to dissolve the phagosomal membrane, allowing the bacteria to escape into the cytoplasm.</li>
        <li><strong class="text-slate-800">Intracellular replication:</strong> Rapid multiplication leads to host cell destruction.</li>
      </ul>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Key Species & Diseases:</h4>
       <ul class="list-disc pl-5 space-y-2">
        <li><strong class="text-slate-800">R. prowazekii:</strong> Causes <strong class="text-slate-800">epidemic typhus</strong>, transmitted by the human body louse. Associated with crowded, unhygienic conditions.</li>
        <li><strong class="text-slate-800">R. typhi:</strong> Causes <strong class="text-slate-800">endemic (murine) typhus</strong>, transmitted from a rat reservoir by the rat flea.</li>
        <li><strong class="text-slate-800">Coxiella burnetii:</strong> Causes <strong class="text-slate-800">Q fever</strong>. It is unique as it is highly robust, forms spore-like structures, and is typically transmitted by inhalation of aerosols from infected farm animals (cattle, sheep, goats) rather than an arthropod vector. It often presents as atypical pneumonia.</li>
      </ul>
    `
  },
    {
    id: 'clinical_infections',
    title: 'Clinical Infections',
    category: 'Bacteriology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Sepsis & Septicaemia</h3>
      <p class="mb-4"><strong class="text-slate-800">Septicaemia</strong> refers to the presence of bacteria in the blood (bacteraemia) that are causing a systemic illness. <strong class="text-slate-800">Sepsis</strong> is the clinical syndrome that results from this: a life-threatening organ dysfunction caused by a dysregulated host response to infection.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Common Causes from Focal Sources:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">Skin & Soft Tissue:</strong> Very common source. Key organisms include <strong class="text-slate-800">Staphylococcus aureus</strong>, <strong class="text-slate-800">S. epidermidis</strong> (especially from IV lines), and <strong class="text-slate-800">S. pyogenes</strong>.</li>
        <li><strong class="text-slate-800">Heart (Endocarditis):</strong> Common causes include <strong class="text-slate-800">Streptococci</strong> (e.g., viridans group, S. pyogenes) and <strong class="text-slate-800">Staphylococci</strong> (e.g., S. aureus).</li>
        <li><strong class="text-slate-800">Urinary Tract:</strong> Often caused by Gram-negative rods like E. coli.</li>
        <li><strong class="text-slate-800">Respiratory Tract:</strong> e.g., Streptococcus pneumoniae.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-2 text-sky-700">Pyrexia of Unknown Origin (PUO)</h3>
      <p class="mb-4">Fever is a temperature greater than 38.3°C (101°F). PUO is a fever for which a cause has not been found despite thorough investigation.</p>
      
       <h4 class="font-semibold mb-2 mt-4 text-slate-600">Classical PUO Definition & Causes:</h4>
      <p class="mb-4">Classically, PUO is defined as a fever present for <strong class="text-slate-800">3 weeks</strong> with no identified cause. The main causes fall into three broad categories:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong class="text-slate-800">Infections (~30-40%):</strong> Systemic infections like Tuberculosis, endocarditis, and Brucellosis, or localized occult abscesses (e.g., intra-abdominal).</li>
        <li><strong class="text-slate-800">Malignancies (~20-30%):</strong> Cancers, especially lymphoma and leukaemia, can present with fever as a primary symptom.</li>
        <li><strong class="text-slate-800">Connective Tissue/Autoimmune Diseases (~10-20%):</strong> Conditions like Adult-onset Still's disease, systemic lupus erythematosus (SLE), and vasculitis.</li>
      </ul>
    `
  }
];
