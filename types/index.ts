export enum DomainScoreCategory {
  brandImpact = "Brand Impact",
  usability = "Usability",
  relevanceAndSEO = "Relevance and SEO",
  technicalConsiderations = "Technical Considerations",
  legalAndCulturalFactors = "Legal and Cultural Factors",
  marketPotential = "Market Potential",
}

export type DomainScoreCategoryKeys = keyof typeof DomainScoreCategory;

export type CategoryScore = {
  score: number;
  explanation: string;
};

export type CategoryScores = {
  [key in DomainScoreCategoryKeys]: CategoryScore;
};

export type DomainScoreData = {
  domainName: string;
  guessedPurpose: string;
  categoryScores: CategoryScores;
  overallScore: number;
  pros: string[];
  cons: string[];
};

export type DomainsComparisonData = {
  recommendation: { choice: string; reasoning: string };
  domains: DomainScoreData[];
};

export type DomainSuggestion = {
  domainName: string;
  overallScore: number;
  explanation: string;
} & { [key in DomainScoreCategoryKeys]: number };

export type DomainSuggestionsData = {
  suggestions: DomainSuggestion[];
};
