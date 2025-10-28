
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
    explanation: "P. falciparum causes malignant tertian malaria, the most severe type, with a 48-hour cycle of fever."
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
    explanation: "P. vivax causes benign tertian malaria, which also has a 48-hour fever cycle but is generally less severe than P. falciparum."
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
    explanation: "P. malariae is distinct for causing quartan malaria, characterized by a 72-hour cycle between fever episodes."
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
    explanation: "Toxoplasma gondii is a coccidian parasite of cats. The sexual cycle occurs in the cat, which is the primary host."
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
    explanation: "Humans are infected by ingesting oocysts in food soiled with cat faeces, or by eating undercooked meat containing tissue cysts."
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
    explanation: "Leishmania species are intracellular parasites of humans, transmitted by the bites of sandflies."
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
    explanation: "The promastigote is the elongated, flagellated form found in the insect (sandfly) host, which is injected into humans during a bite."
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
    explanation: "The L. donovani complex causes kala-azar (visceral leishmaniasis), a severe systemic disease."
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
    explanation: "The L. tropica complex causes oriental sore (cutaneous leishmaniasis), a skin infection."
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
    explanation: "T. brucei lives and multiplies in the human bloodstream and invades the CNS to cause human sleeping sickness."
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
    explanation: "T. cruzi is an intracellular parasite causing both acute and chronic Chagas' disease, which involves cardiac and gut complications."
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
    explanation: "Unlike most bacteria, Rickettsiae lack enzymes for energy metabolism, making them obligate intracellular parasites that rely on the host cell."
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
    explanation: "R. prowazeckii causes epidemic louse-borne typhus. Humans are the principal host."
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
    explanation: "R. typhi causes endemic murine typhus, with the natural reservoir being the rat."
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
    explanation: "C. burnetii is the causative agent of Q fever. It is unique among Rickettsiaceae for its spore-like structures and direct inhalation route of infection."
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
    explanation: "All listed options (Lipopolysaccharide, toxins, Phospholipase A, and intracellular replication) are considered virulence factors for Rickettsiae. 'None of the above' is correct as all are factors."
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
    explanation: "Phospholipase A is a known virulence factor used to dissolve the phagosomal membrane. Phospholipase B is not mentioned as a key factor."
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
    explanation: "Classical Pyrexia of Unknown Origin (PUO) can be caused by numerous infections, including Brucellosis, Salmonellosis (Enteric fever), and Tuberculosis."
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
    explanation: "The list of infectious causes for PUO is extensive and includes Brucellosis, Tuberculosis, and Psittacosis among many others."
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
    explanation: "Classically, PUO was defined as a fever present for 3 weeks for which no cause could be found after investigation."
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
    explanation: "Skin is a common focal source for septicaemia. Causative organisms include Staphylococci (like S. aureus and S. epidermidis/CNS) and S. pyogenes."
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
    explanation: "Septicemia originating from the heart (endocarditis) is commonly caused by Streptococci (like S. pyogenes and S. agalactiae) and Staphylococci (like S. aureus)."
  }
];

export const LEARNING_TOPICS: Topic[] = [
  {
    id: 'plasmodium',
    title: 'Plasmodium',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Plasmodia (Malaria)</h3>
      <p class="mb-4">Plasmodia are sporozoan parasites that cause malaria in humans. The infection is transmitted by female Anopheles mosquitoes. The life cycle is complex, involving a sexual cycle in the mosquito and asexual cycles in the human liver and red blood cells.</p>
      <h4 class="font-semibold mb-2 text-slate-600">Key Species:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">P. falciparum:</strong> Causes malignant tertian malaria, the most severe form. It has a 48-hour cycle of fever.</li>
        <li><strong class="text-slate-800">P. vivax:</strong> Causes benign tertian malaria, the most widely distributed form. It also has a 48-hour fever cycle.</li>
        <li><strong class="text-slate-800">P. malariae:</strong> Causes quartan malaria, which is characterized by a 72-hour cycle of fever.</li>
        <li><strong class="text-slate-800">P. ovale:</strong> A cause of tertian malaria (48-hour cycle) in West Africa, relatively uncommon.</li>
      </ul>
      <p>Episodes of fever occur when merozoites (a stage of the parasite) are released from red blood cells. The interval between fever bouts depends on the time taken to complete this asexual cycle.</p>
    `
  },
  {
    id: 'toxoplasma',
    title: 'Toxoplasma',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Toxoplasma gondii</h3>
      <p class="mb-4">T. gondii is a coccidian parasite whose primary host is the cat. The sexual cycle of the parasite occurs in cats, producing oocytes which are shed in the faeces.</p>
      <h4 class="font-semibold mb-2 text-slate-600">Life Cycle & Transmission:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Primary Host:</strong> The cat, where the sexual cycle occurs.</li>
        <li><strong>Infective Stage:</strong> Humans and other animals (intermediate hosts) become infected by ingesting <strong class="text-slate-800">oocytes</strong> from sources contaminated with cat faeces, or by consuming undercooked meat containing tissue cysts.</li>
        <li><strong>Asexual Cycle in Humans:</strong> In humans, the asexual cycle produces tachyzoites (which infect cells) and bradyzoites (which form dormant tissue cysts).</li>
      </ul>
    `
  },
  {
    id: 'leishmania',
    title: 'Leishmania',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Leishmania</h3>
      <p class="mb-4">Leishmania are protozoal haemoflagellates transmitted to humans by the bite of a <strong class="text-slate-800">sandfly</strong>. They are intracellular parasites that replicate within mammalian host cells.</p>
      <h4 class="font-semibold mb-2 text-slate-600">Life Cycle & Key Forms:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">Promastigote:</strong> This is the elongated, flagellated, infective stage found in the sandfly. It is injected into the human during a bite.</li>
        <li><strong class="text-slate-800">Amastigote:</strong> This is the rounded, non-flagellated, replicating form found inside host cells (like macrophages) in mammals.</li>
      </ul>
      <h4 class="font-semibold mb-2 text-slate-600">Key Species & Diseases:</h4>
       <ul class="list-disc pl-5 space-y-2">
        <li><strong class="text-slate-800">L. donovani complex:</strong> Causes kala-azar (visceral leishmaniasis), a severe systemic illness affecting spleen, liver, and bone marrow.</li>
        <li><strong class="text-slate-800">L. tropica complex:</strong> Causes oriental sore (cutaneous leishmaniasis), resulting in skin ulcers.</li>
      </ul>
    `
  },
    {
    id: 'trypanosoma',
    title: 'Trypanosoma',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Trypanosoma</h3>
      <p class="mb-4">Trypanosomes are haemoflagellates that cause significant diseases in humans. They are spread by insect vectors.</p>
      <h4 class="font-semibold mb-2 text-slate-600">Key Species:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong class="text-slate-800">Trypanosoma brucei:</strong> Transmitted by the tsetse fly. It lives and multiplies in the human bloodstream and eventually invades the central nervous system (CNS), causing <strong class="text-slate-800">human sleeping sickness</strong>.</li>
        <li><strong class="text-slate-800">Trypanosoma cruzi:</strong> Transmitted by the reduviid ('kissing') bug. It is an intracellular parasite that causes <strong class="text-slate-800">Chagas' disease</strong>, which has both acute and chronic phases and can lead to severe cardiac and gastrointestinal damage.</li>
      </ul>
    `
  },
  {
    id: 'rickettsiae',
    title: 'Rickettsiae',
    category: 'Bacteriology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Rickettsiae</h3>
      <p class="mb-4">Rickettsiae are small, aerobic, Gram-negative bacteria that are obligate intracellular parasites. This means they cannot replicate outside of a host cell.</p>
      <h4 class="font-semibold mb-2 text-slate-600">Characteristics:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li>They have a cell wall with inner and outer membranes, contain RNA and DNA, and have peptidoglycan.</li>
        <li>Crucially, they <strong class="text-slate-800">lack enzymes for energy metabolism</strong>, requiring them to steal ATP from the host cell.</li>
      </ul>
       <h4 class="font-semibold mb-2 text-slate-600">Virulence Factors:</h4>
       <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">Lipopolysaccharide (LPS):</strong> A component of the outer membrane typical of Gram-negative bacteria.</li>
        <li><strong class="text-slate-800">Toxin:</strong> Ill-defined toxins contribute to pathogenesis.</li>
        <li><strong class="text-slate-800">Phospholipase A:</strong> An enzyme used to dissolve the phagosomal membrane, allowing the bacteria to escape into the cytoplasm.</li>
        <li><strong class="text-slate-800">Intracellular replication:</strong> Rapid multiplication inside the host cell leads to cell destruction and death.</li>
      </ul>
      <h4 class="font-semibold mb-2 text-slate-600">Key Species & Diseases:</h4>
       <ul class="list-disc pl-5 space-y-2">
        <li><strong class="text-slate-800">R. prowazekii:</strong> Causes <strong class="text-slate-800">epidemic typhus</strong>, transmitted by the human body louse.</li>
        <li><strong class="text-slate-800">R. typhi:</strong> Causes <strong class="text-slate-800">endemic (murine) typhus</strong>, transmitted by the rat flea.</li>
        <li><strong class="text-slate-800">Coxiella burnetii:</strong> Causes <strong class="text-slate-800">Q fever</strong>. It is unique as it is highly robust in the environment and typically transmitted by inhalation rather than an arthropod vector.</li>
      </ul>
    `
  },
    {
    id: 'clinical_infections',
    title: 'Clinical Infections',
    category: 'Bacteriology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Septicaemia (Sepsis)</h3>
      <p class="mb-4">Septicaemia is a clinical description for a severe infection with systemic symptoms like fever, rigors (shaking chills), and tachycardia. It is often, but not always, associated with bacteraemia (live organisms in the blood).</p>
      <h4 class="font-semibold mb-2 text-slate-600">Common Causes from Focal Sources:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">Skin:</strong> Very common source. Key organisms include <strong class="text-slate-800">Staphylococci</strong> (e.g., S. aureus, S. epidermidis) and <strong class="text-slate-800">S. pyogenes</strong>.</li>
        <li><strong class="text-slate-800">Heart (Endocarditis):</strong> Common causes include <strong class="text-slate-800">Streptococci</strong> (e.g., S. pyogenes, S. agalactiae, viridans group) and <strong class="text-slate-800">Staphylococci</strong> (e.g., S. aureus).</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-2 text-sky-700">Pyrexia of Unknown Origin (PUO)</h3>
      <p class="mb-4">Fever is a temperature greater than 38.3°C (101°F). PUO is a fever for which a cause has not been found despite investigation.</p>
       <h4 class="font-semibold mb-2 text-slate-600">Classical PUO Definition:</h4>
      <p class="mb-4">Classically, PUO is defined as a fever present for <strong class="text-slate-800">3 weeks</strong> with no identified cause after a period of investigation.</p>
      <h4 class="font-semibold mb-2 text-slate-600">Infectious Causes of PUO:</h4>
      <p>Infections are a major cause of PUO. The list of potential pathogens is very long and includes:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li>Abscesses (especially intra-abdominal)</li>
        <li>Enteric fever (<strong class="text-slate-800">Salmonellosis</strong>)</li>
        <li><strong class="text-slate-800">Tuberculosis</strong></li>
        <li><strong class="text-slate-800">Brucellosis</strong></li>
        <li><strong class="text-slate-800">Psittacosis</strong>, Q fever, and many viral infections.</li>
      </ul>
    `
  }
];
