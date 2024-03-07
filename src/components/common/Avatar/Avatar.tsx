import * as AvatarComponent from '@radix-ui/react-avatar';
import styles from './Avatar.module.scss';

export const Avatar = () => {
    return (
        <div>
            <AvatarComponent.Root>
                <AvatarComponent.Image
                    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                    alt="Colm Tuite"
                    className={styles.avatar}
                />
                <AvatarComponent.Fallback />
            </AvatarComponent.Root>
        </div>
    );
};
