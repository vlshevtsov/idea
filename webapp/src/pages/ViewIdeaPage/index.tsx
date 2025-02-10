import { format } from 'date-fns/format'
import { useParams } from 'react-router-dom'
import { getEditIdeaRoute, ViewIdeaRouteParams } from '../../lib/routes'
import { trpc } from '../../lib/trpc'
import css from './index.module.scss'
import { Segment } from '../../components/Segment'
import { LinkButton } from '../../components/Button'
import { withPageWrapper } from '../../lib/pageWrapper'

export const ViewIdeaPage = withPageWrapper({
  useQuery: () => {
    const { ideaNick } = useParams() as ViewIdeaRouteParams
    return trpc.getIdea.useQuery({
      ideaNick,
    })
  },
  setProps: ({ queryResult, checkExists, ctx }) => ({
    idea: checkExists(queryResult.data.idea, 'Idea not found'),
    me: ctx.me,
  }),
})(({ idea, me }) => (
  <Segment title={idea.name} description={idea.description}>
    <div className={css.createdAt}>
      Created at: {format(idea.createdAt, 'dd.MM.yyyy')}
    </div>
    <div className={css.author}>Author: {idea.author.nick}</div>
    <div className={css.text} dangerouslySetInnerHTML={{ __html: idea.text }} />
    {me?.id === idea.authorId && (
      <div className={css.editButton}>
        <LinkButton to={getEditIdeaRoute({ ideaNick: idea.nick })}>
          Edit Idea
        </LinkButton>
      </div>
    )}
  </Segment>
))
