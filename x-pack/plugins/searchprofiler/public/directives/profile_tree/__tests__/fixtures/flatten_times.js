/* eslint quotes: 0 */
export const flatTimes = [
  {
    id:"f1e689b1-dafe-4c2b-9a4d-9bd8f1a53803",
    childrenIds:[
      "3339dca6-c34a-49f3-a534-27e46f238bcd",
      "9b75ecdd-a1da-45eb-8d13-5bc5f472dba3",
      "ddf5aa3e-4b22-4332-9d5e-79a6ae0cc9cb"
    ],
    lucene:"hour:1 hour:2 #MatchNoDocsQuery[\"User requested \"match_none\" query.\"]",
    time:0.447365,
    selfTime:0.057085,
    timePercentage:"100.00",
    query_type:"BooleanQuery",
    absoluteColor:"#ffafaf",
    depth:0,
    hasChildren:true,
    breakdown:[
      {
        key:"create_weight",
        time:401690,
        relative:"89.8",
        color:"#feb6b6",
        tip:"The time taken to create the Weight object, which holds temporary information during scoring."
      },
      {
        key:"build_scorer",
        time:45672,
        relative:"10.2",
        color:"#f6eeee",
        tip:"The time taken to create the Scoring object, which is later used to execute the actual scoring of each doc."
      },
      {
        key:"build_scorer_count",
        time:2,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"create_weight_count",
        time:1,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"next_doc",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to advance the iterator to the next matching document."
      },
      {
        key:"match",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to execute a secondary, more precise scoring phase (used by phrase queries)."
      },
      {
        key:"match_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"next_doc_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"score_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"score",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken in actually scoring the document against the query."
      },
      {
        key:"advance",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to advance the iterator to the next document."
      },
      {
        key:"advance_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      }
    ]
  },
  {
    id:"3339dca6-c34a-49f3-a534-27e46f238bcd",
    parentId:"f1e689b1-dafe-4c2b-9a4d-9bd8f1a53803",
    childrenIds:[

    ],
    lucene:"hour:1",
    time:0.192502,
    selfTime:0.192502,
    timePercentage:"43.03",
    query_type:"TermQuery",
    absoluteColor:"#f9d7d7",
    depth:1,
    breakdown:[
      {
        key:"create_weight",
        time:190989,
        relative:"99.2",
        color:"#ffb0b0",
        tip:"The time taken to create the Weight object, which holds temporary information during scoring."
      },
      {
        key:"build_scorer",
        time:1510,
        relative:"0.8",
        color:"#f5f4f4",
        tip:"The time taken to create the Scoring object, which is later used to execute the actual scoring of each doc."
      },
      {
        key:"build_scorer_count",
        time:2,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"create_weight_count",
        time:1,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"next_doc",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to advance the iterator to the next matching document."
      },
      {
        key:"match",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to execute a secondary, more precise scoring phase (used by phrase queries)."
      },
      {
        key:"match_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"next_doc_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"score_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"score",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken in actually scoring the document against the query."
      },
      {
        key:"advance",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to advance the iterator to the next document."
      },
      {
        key:"advance_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      }
    ]
  },
  {
    id:"9b75ecdd-a1da-45eb-8d13-5bc5f472dba3",
    parentId:"f1e689b1-dafe-4c2b-9a4d-9bd8f1a53803",
    childrenIds:[

    ],
    lucene:"hour:2",
    time:0.162608,
    selfTime:0.162608,
    timePercentage:"36.35",
    query_type:"TermQuery",
    absoluteColor:"#f9dcdc",
    depth:1,
    breakdown:[
      {
        key:"create_weight",
        time:162016,
        relative:"99.6",
        color:"#ffafaf",
        tip:"The time taken to create the Weight object, which holds temporary information during scoring."
      },
      {
        key:"build_scorer",
        time:589,
        relative:"0.4",
        color:"#f5f5f5",
        tip:"The time taken to create the Scoring object, which is later used to execute the actual scoring of each doc."
      },
      {
        key:"build_scorer_count",
        time:2,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"create_weight_count",
        time:1,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"next_doc",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to advance the iterator to the next matching document."
      },
      {
        key:"match",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to execute a secondary, more precise scoring phase (used by phrase queries)."
      },
      {
        key:"match_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"next_doc_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"score_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"score",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken in actually scoring the document against the query."
      },
      {
        key:"advance",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to advance the iterator to the next document."
      },
      {
        key:"advance_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      }
    ]
  },
  {
    id:"ddf5aa3e-4b22-4332-9d5e-79a6ae0cc9cb",
    parentId:"f1e689b1-dafe-4c2b-9a4d-9bd8f1a53803",
    childrenIds:[

    ],
    lucene:"MatchNoDocsQuery[\"User requested \"match_none\" query.\"]",
    time:0.03517,
    selfTime:0.03517,
    timePercentage:"7.86",
    query_type:"MatchNoDocsQuery",
    absoluteColor:"#f6efef",
    depth:1,
    breakdown:[
      {
        key:"build_scorer",
        time:32522,
        relative:"92.5",
        color:"#feb4b4",
        tip:"The time taken to create the Scoring object, which is later used to execute the actual scoring of each doc."
      },
      {
        key:"create_weight",
        time:2645,
        relative:"7.5",
        color:"#f6f0f0",
        tip:"The time taken to create the Weight object, which holds temporary information during scoring."
      },
      {
        key:"build_scorer_count",
        time:2,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"create_weight_count",
        time:1,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"next_doc",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to advance the iterator to the next matching document."
      },
      {
        key:"match",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to execute a secondary, more precise scoring phase (used by phrase queries)."
      },
      {
        key:"match_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"next_doc_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"score_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      },
      {
        key:"score",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken in actually scoring the document against the query."
      },
      {
        key:"advance",
        time:0,
        relative:"0.0",
        color:"#f5f5f5",
        tip:"The time taken to advance the iterator to the next document."
      },
      {
        key:"advance_count",
        time:0,
        relative:0,
        color:"#f5f5f5",
        tip:""
      }
    ]
  }
];